import styled from 'styled-components'

export const PageTopbar = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1002;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
`
export const NavbarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 50px;
  padding: 0 calc(24px / 2) 0 0;
`
export const NavbarBrandBox = styled.div`
  background: #fff;
  padding: 0 1.5rem;
  width: 200px;
  height: 50px;
`
export const Logo = styled.a`
  line-height: 50px;
`
