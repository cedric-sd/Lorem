# Configurando OpenRouter no OpenClaw (Docker)

Guia prático para habilitar modelos do OpenRouter num OpenClaw rodando em Docker (ex: setup 1-click da Hostinger).

## Pré-requisitos

- OpenClaw já rodando em container Docker
- Acesso SSH/terminal ao host da VPS
- Chave de API do OpenRouter (começa com `sk-or-v1-`) com créditos disponíveis — gere em https://openrouter.ai/keys

---

## 1. Localizar o container e os arquivos de configuração

No host, identifique o container:

```bash
docker ps
```

Procure os arquivos de configuração do setup:

```bash
find / -type f \( -name "docker-compose*.yml" -o -name ".env" \) 2>/dev/null | grep -i claw
```

No caso da Hostinger, normalmente estão em `/docker/openclaw-<hash>/`.

---

## 2. Verificar se a chave já está injetada no container

Entre no container:

```bash
docker exec -it <nome-do-container> sh
```

Confira as variáveis de ambiente:

```bash
env | grep -iE "openai|openrouter|api_key"
```

Se `OPENROUTER_API_KEY` já aparece aqui, pule para o passo 4. Caso contrário, siga o passo 3.

---

## 3. Adicionar a chave no `.env`

No host, edite o arquivo `.env` do setup:

```bash
nano /docker/openclaw-<hash>/.env
```

Adicione ou ajuste a linha:

```
OPENROUTER_API_KEY=sk-or-v1-sua-chave-aqui
```

Salve (`Ctrl+O`, Enter) e saia (`Ctrl+X`).

Recrie o container para aplicar:

```bash
cd /docker/openclaw-<hash>
docker compose up -d
```

---

## 4. Habilitar o plugin e os modelos no `openclaw.json`

Localize o config dentro do container (geralmente em `/data/.openclaw/openclaw.json` ou similar):

```bash
docker exec -it <nome-do-container> sh
find / -name "openclaw.json" 2>/dev/null
```

Edite o arquivo e faça três ajustes:

### 4.1 Habilitar o plugin `openrouter`

Na seção `plugins.entries`:

```json
"openrouter": { "enabled": true }
```

E na lista `plugins.allow`, adicione:

```json
"openrouter"
```

### 4.2 Registrar modelos do OpenRouter

Em `agents.defaults.models`, adicione os modelos desejados. O formato é sempre `openrouter/<autor>/<slug>`:

```json
"models": {
  "openrouter/anthropic/claude-sonnet-4.6": { "alias": "Claude Sonnet 4.6" },
  "openrouter/anthropic/claude-opus-4.6":   { "alias": "Claude Opus 4.6" },
  "openrouter/deepseek/deepseek-chat":      { "alias": "DeepSeek" },
  "openrouter/google/gemini-2.5-pro":       { "alias": "Gemini 2.5 Pro" }
}
```

Os slugs exatos estão em https://openrouter.ai/models.

### 4.3 Definir o modelo primário

Em `agents.defaults.model.primary`, use o **alias** (não o ID completo):

```json
"model": {
  "primary": "Claude Sonnet 4.6"
}
```

---

## 5. Reiniciar e validar

Reinicie o container:

```bash
docker restart <nome-do-container>
```

Confira se os modelos foram carregados:

```bash
docker exec -it <nome-do-container> sh -c "openclaw models list"
```

A lista deve incluir entradas com prefixo `openrouter/`.

---

## Troubleshooting

| Sintoma | Causa provável | Solução |
|---|---|---|
| Erro 401 | Chave inválida ou sem créditos | Verificar em https://openrouter.ai/credits |
| "Model not found" | Slug escrito errado | Copiar identificador exato de openrouter.ai/models |
| `env` não mostra a chave | `.env` não foi aplicado | Rodar `docker compose up -d` (não basta `restart`) |
| Plugin não ativa | Faltou adicionar em `allow` | Conferir os dois lugares: `entries` e `allow` |

---

## Trocar de modelo em runtime

Sem precisar editar arquivo, mande no chat com o agente:

```
/model openrouter/openai/gpt-5
```

Útil para comparar modelos antes de fixar um como primário.

---

## Segurança

- Nunca comite `openclaw.json` ou `.env` com tokens reais em repositórios públicos
- A `OPENROUTER_API_KEY` dá acesso total aos seus créditos — trate como senha
- O token de gateway em `gateway.auth.token` dá acesso à UI do OpenClaw — idem