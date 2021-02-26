import Link from 'next/link'

import * as S from 'components/Header/styles'

const Header = () => {
  return (
    <S.Container>
      <div>
        <Link href="#">
          <a>
            <S.Logo src="/images/LogoLorem.png" alt="Logo Padrão" />
          </a>
        </Link>
      </div>
      <S.CustomNav>
        <S.CustomUl>
          <li>
            <Link href="#">
              <a>Página inicial</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a>Contato</a>
            </Link>
          </li>
        </S.CustomUl>
        <div>
          <Link href="#">
            <S.CustomButton>Login</S.CustomButton>
          </Link>
        </div>
      </S.CustomNav>
    </S.Container>
  )
}

export default Header
