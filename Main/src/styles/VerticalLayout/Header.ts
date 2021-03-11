import styled from 'styled-components'
import { Form, Input } from 'reactstrap'
import { FaSearch } from 'react-icons/fa'

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
  height: 70px;
  padding: 0 calc(24px / 2) 0 0;
`
export const NavbarBrandBox = styled.div`
  background: #252b3b;
  padding: 0 1.5rem;
  width: 240px;
`
export const Logo = styled.a`
  line-height: 70px;
`
export const FormAppSearch = styled(Form)`
  padding: calc(32px / 2) 0;
`
export const InputSearch = styled(Input)`
  border: none;
  height: 38px;
  padding-left: 40px;
  padding-right: 20px;
  background-color: #f1f5f7;
  box-shadow: none;
  border-radius: 30px;
  margin-left: 5px;
`
export const SpanSearch = styled(FaSearch)`
  position: absolute;
  left: 20px;
  top: 12px;
  color: #74788d;
  width: 16px;
`
