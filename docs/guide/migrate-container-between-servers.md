# Guia: Migração de Container Docker entre Servidores

Documento de referência para migrar containers Docker de um servidor para outro, usando GitHub Container Registry (GHCR) e Docker Swarm + Portainer no destino.

---

## 📋 Sumário

- [Visão Geral](#visão-geral)
- [Pré-requisitos](#pré-requisitos)
- [Passo 1: Inspecionar o Container Original](#passo-1-inspecionar-o-container-original)
- [Passo 2: Decidir a Estratégia da Imagem](#passo-2-decidir-a-estratégia-da-imagem)
- [Passo 3: Push para o GHCR (se necessário)](#passo-3-push-para-o-ghcr-se-necessário)
- [Passo 4: Migrar Volumes / Bind Mounts](#passo-4-migrar-volumes--bind-mounts)
- [Passo 5: Deploy no Portainer (Swarm)](#passo-5-deploy-no-portainer-swarm)
- [Passo 6: Validação](#passo-6-validação)
- [Passo 7: Limpeza](#passo-7-limpeza)
- [Troubleshooting](#troubleshooting)
- [Referência Rápida de Comandos](#referência-rápida-de-comandos)

---

## Visão Geral

### Fluxo da migração

```
Servidor Origem  →  GHCR  →  Servidor Destino (Swarm)
     ↓                              ↑
  volumes ─────── scp ──────→  bind mounts
```

### Quando usar cada estratégia

| Cenário | Estratégia |
|---------|-----------|
| Imagem é pública e não foi modificada | Usar imagem original direto (pula push) |
| Container foi modificado em runtime | `docker commit` + push pro GHCR |
| Migração única e isolada | `docker save` + `scp` + `docker load` |
| Produção / migrações recorrentes | Sempre via registry |

---

## Pré-requisitos

- Acesso SSH aos dois servidores (origem e destino)
- Docker instalado nos dois lados
- No destino: cluster Swarm + Portainer configurados
- Personal Access Token (PAT) do GitHub com permissões:
  - `write:packages`
  - `read:packages`
  - `delete:packages`

### Configurando o PAT no GitHub

1. GitHub → **Settings** → **Developer settings**
2. **Personal access tokens** → **Tokens (classic)**
3. **Generate new token** com os escopos acima
4. Salvar o token em local seguro (só aparece uma vez)

---

## Passo 1: Inspecionar o Container Original

Antes de qualquer coisa, levantar todas as informações do container que vai ser migrado.

```bash
# Listar containers em execução
docker ps

# Inspecionar o container completo
docker inspect <container_id>
```

### Informações críticas para anotar

**Imagem original:**
```bash
docker inspect <container_id> | grep '"Image"'
```

**Variáveis de ambiente:**
```bash
docker inspect <container_id> | grep -A 50 '"Env"'
```

**Volumes / Bind Mounts:**
```bash
docker inspect <container_id> | grep -A 20 Mounts
```

**Portas mapeadas:**
```bash
docker port <container_id>
```

**Comando / Entrypoint:**
```bash
docker inspect <container_id> | grep -A 5 -E '"Cmd"|"Entrypoint"'
```

### Diferença entre tipos de armazenamento

| Tipo | Como aparece no inspect | Como migrar |
|------|------------------------|-------------|
| **Volume nomeado** | `"Type": "volume"` | Backup com `docker run alpine tar` |
| **Bind mount** | `"Type": "bind"` | Copiar pasta direto com `tar` + `scp` |
| **tmpfs** | `"Type": "tmpfs"` | Não persiste — não precisa migrar |

---

## Passo 2: Decidir a Estratégia da Imagem

### Opção A — Usar a imagem original (recomendado quando possível)

Se a imagem é pública e o container roda **sem modificações em runtime**, você pode usar a mesma imagem direto no destino. **Pula para o Passo 4.**

Exemplo: se o `docker ps` mostra `ghcr.io/empresa/app:latest`, você pode referenciar essa mesma imagem no destino.

### Opção B — Commit + Push para o GHCR

Use quando:
- Você instalou pacotes ou modificou arquivos dentro do container em runtime
- A imagem original é privada e você não tem acesso
- Você quer ter sua própria versão controlada

Continue para o Passo 3.

---

## Passo 3: Push para o GHCR (se necessário)

### 3.1 — Commit do container

```bash
docker commit <container_id> nome-da-imagem:v1
```

### 3.2 — Login no GHCR

```bash
echo "SEU_PAT_AQUI" | docker login ghcr.io -u SEU_USUARIO_GITHUB --password-stdin
```

### 3.3 — Tag no formato GHCR

```bash
docker tag nome-da-imagem:v1 ghcr.io/SEU_USUARIO_GITHUB/nome-da-imagem:v1
```

### 3.4 — Push

```bash
docker push ghcr.io/SEU_USUARIO_GITHUB/nome-da-imagem:v1
```

### 3.5 — Verificar visibilidade do package

1. GitHub → seu perfil → **Packages**
2. Localizar o package recém criado
3. **Package settings** → escolher entre:
   - **Privado** (recomendado): exige autenticação no destino
   - **Público**: qualquer um pode pullar

> 💡 Se manter privado, garanta que o registry GHCR já está configurado no Portainer com as credenciais.

---

## Passo 4: Migrar Volumes / Bind Mounts

> ⚠️ **Esse é o passo mais esquecido e o que mais quebra migrações.** Imagens Docker **não** incluem dados de volumes ou bind mounts.

### 4.1 — Parar o container (recomendado)

Pra evitar inconsistência durante o backup (especialmente importante com bancos de dados):

```bash
docker stop <container_id>
```

### 4.2A — Migrando Bind Mounts

Bind mounts são pastas comuns no host. Basta copiar.

**No servidor de origem:**

```bash
# Compactar a pasta
cd /caminho/pai
tar czf backup.tar.gz nome-da-pasta/

# Verificar tamanho
ls -lh backup.tar.gz

# Copiar pro destino
scp backup.tar.gz usuario@SERVIDOR_DESTINO:/tmp/
```

**No servidor de destino** (no nó do Swarm onde o container vai rodar):

```bash
# Recriar a estrutura no MESMO caminho original
sudo mkdir -p /caminho/pai
cd /caminho/pai
sudo tar xzf /tmp/backup.tar.gz

# Verificar permissões
ls -la /caminho/pai/nome-da-pasta/
```

### 4.2B — Migrando Volumes Nomeados

**No servidor de origem:**

```bash
docker run --rm \
  -v NOME_DO_VOLUME:/data \
  -v $(pwd):/backup \
  alpine tar czf /backup/volume-backup.tar.gz -C /data .

scp volume-backup.tar.gz usuario@SERVIDOR_DESTINO:/tmp/
```

**No servidor de destino:**

```bash
docker volume create NOME_DO_VOLUME

docker run --rm \
  -v NOME_DO_VOLUME:/data \
  -v /tmp:/backup \
  alpine tar xzf /backup/volume-backup.tar.gz -C /data
```

### ⚠️ Atenção em Docker Swarm

Volumes locais e bind mounts **ficam presos ao nó** onde foram criados. Se o serviço subir em outro nó, ele não acha os dados. Soluções:

- **Constraint** no compose pra forçar o serviço a rodar num nó específico (mais simples)
- **NFS** ou storage compartilhado entre os nós
- **Plugins de volume** (Longhorn, GlusterFS, etc) para alta disponibilidade

Pra começar, **constraint** geralmente resolve.

---

## Passo 5: Deploy no Portainer (Swarm)

### 5.1 — Identificar o nó alvo

No servidor destino:

```bash
docker node ls
```

Anotar o **HOSTNAME** do nó onde os volumes/bind mounts foram restaurados.

### 5.2 — Criar a stack no Portainer

1. **Stacks** → **Add stack**
2. **Name**: nome da stack (ex: `meu-app`)
3. **Build method**: **Web editor**
   - Use Web editor quando o compose **não está versionado** num repo Git
   - Use Repository quando você quer que o Portainer puxe automaticamente de um repo
4. Colar o compose (templates abaixo)
5. **Registry**: selecionar o GHCR já configurado (se a imagem for privada)
6. **Deploy the stack**

### 5.3 — Template com Bind Mount

```yaml
version: '3.8'

services:
  app:
    image: ghcr.io/usuario/imagem:tag
    ports:
      - "8080:8080"
    environment:
      - VAR1=valor1
      - VAR2=valor2
    volumes:
      - type: bind
        source: /caminho/no/host
        target: /caminho/dentro/do/container
    deploy:
      replicas: 1
      placement:
        constraints:
          - node.hostname == NOME_DO_NO
      restart_policy:
        condition: any
```

### 5.4 — Template com Volume Nomeado

```yaml
version: '3.8'

services:
  app:
    image: ghcr.io/usuario/imagem:tag
    ports:
      - "8080:8080"
    environment:
      - VAR1=valor1
    volumes:
      - app_data:/caminho/dentro/do/container
    deploy:
      replicas: 1
      placement:
        constraints:
          - node.hostname == NOME_DO_NO
      restart_policy:
        condition: any

volumes:
  app_data:
    external: true
```

### Checklist antes do deploy

- [ ] Imagem aponta pro registry correto e tag existe
- [ ] Portas correspondem ao que o app expõe
- [ ] Variáveis de ambiente coletadas do `docker inspect`
- [ ] Caminhos dos volumes/binds corretos
- [ ] Constraint apontando pro nó certo
- [ ] Senhas e tokens revisados (considerar Secrets do Swarm)

---

## Passo 6: Validação

```bash
# Lista os serviços
docker service ls

# Status dos containers da stack
docker service ps NOME_DA_STACK_NOME_DO_SERVICO

# Logs em tempo real
docker service logs -f NOME_DA_STACK_NOME_DO_SERVICO

# Ver em qual nó está rodando
docker service ps NOME_DA_STACK_NOME_DO_SERVICO --format "table {{.Name}}\t{{.Node}}\t{{.CurrentState}}"
```

### O que confirmar

1. Estado do serviço: **Running**
2. Nó correto (o do constraint)
3. Logs sem erros críticos
4. Aplicação acessível na porta esperada
5. Dados persistentes carregados corretamente

---

## Passo 7: Limpeza

**Só execute depois de confirmar que o destino está 100% funcional.**

### No servidor de origem

```bash
# Parar e remover container
docker stop <container_id>
docker rm <container_id>

# Remover imagem (opcional)
docker image prune -a

# Remover dados (cuidado!)
sudo rm -rf /caminho/dos/dados

# Remover backup local
rm backup.tar.gz
```

### No servidor de destino

```bash
# Remover backup temporário
sudo rm /tmp/backup.tar.gz
```

---

## Troubleshooting

### Erro: "no such image" no deploy

- Confirme se a imagem foi pushada com sucesso (`docker pull` no destino pra testar)
- Se imagem privada, valide se o registry está configurado no Portainer
- Confira se a tag existe (`:latest` vs `:v1`)

### Container sobe mas perde os dados

- Verifique se o constraint está apontando pro nó certo
- Confirme se o caminho do bind mount existe no nó
- Confira permissões e dono dos arquivos

### Erro: "no suitable node"

- Constraint aponta pra um nó que não existe
- Nó está em modo `drain` ou indisponível
- Verifique com `docker node ls`

### Volume vazio depois do deploy

- O container provavelmente subiu antes da restauração ou em outro nó
- Confirme dados com `ls -la` no caminho do bind mount
- Refaça o backup/restore se necessário

### Porta já em uso

- Outro serviço está usando a porta no nó
- Trocar a porta do host no compose: `"55342:55341"` (host:container)

---

## Referência Rápida de Comandos

### Inspeção

```bash
docker ps                                    # listar containers
docker inspect <id>                          # tudo do container
docker port <id>                             # portas mapeadas
docker logs <id>                             # logs
```

### Imagem

```bash
docker commit <id> nome:tag                  # container → imagem
docker tag origem destino                    # adiciona tag
docker push imagem                           # envia pro registry
docker pull imagem                           # baixa do registry
docker save -o file.tar imagem               # imagem → arquivo
docker load -i file.tar                      # arquivo → imagem
```

### Bind Mount (backup/restore)

```bash
# Backup
tar czf backup.tar.gz pasta/

# Transferência
scp backup.tar.gz user@host:/tmp/

# Restore
tar xzf backup.tar.gz
```

### Volume Nomeado (backup/restore)

```bash
# Backup
docker run --rm -v VOL:/data -v $(pwd):/backup alpine \
  tar czf /backup/backup.tar.gz -C /data .

# Restore
docker volume create VOL
docker run --rm -v VOL:/data -v $(pwd):/backup alpine \
  tar xzf /backup/backup.tar.gz -C /data
```

### Swarm

```bash
docker node ls                               # listar nós
docker service ls                            # listar serviços
docker service ps <serviço>                  # tasks do serviço
docker service logs <serviço>                # logs do serviço
docker service update <serviço>              # atualizar serviço
docker stack rm <stack>                      # remover stack
```

### GHCR

```bash
# Login
echo "PAT" | docker login ghcr.io -u USUARIO --password-stdin

# Logout
docker logout ghcr.io
```

---

## Boas Práticas

1. **Sempre teste no destino antes de remover do origem.** Migração não é evento de uma via única — mantenha o original no ar até confirmar tudo.

2. **Backup antes de migrar.** Mesmo que você vá copiar os dados, ter um backup adicional do volume original num lugar diferente salva vidas.

3. **Documente as envs.** Senhas, tokens e configs específicas devem ser anotadas — algumas imagens não logam o que esperam.

4. **Considere janela de manutenção.** Para containers stateful (banco, app com sessão), um pequeno downtime durante a migração é normal e seguro.

5. **Use tags específicas, evite `:latest`.** Em produção, fixar a versão evita surpresas.

6. **Constraints explícitas em Swarm com bind mounts.** Sem isso, o Swarm pode reagendar o container num nó sem os dados.

7. **Secrets do Swarm para dados sensíveis.** Em vez de envs com senha em texto, use `docker secret` para credenciais.