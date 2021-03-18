import styled from 'styled-components'
import { Dropdown, DropdownToggle } from 'reactstrap'

export const DropdownProjects = styled(Dropdown)`
  position: static;
  height: 50px;
`
export const DropdownHeaderItem = styled(DropdownToggle)`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  height: 50px;
  box-shadow: none !important;
  color: #636e75;
  border: 0;
  border-radius: 0px;
  white-space: nowrap;
  font-weight: 700;
  :hover {
    color: #bbb;
  }
`
