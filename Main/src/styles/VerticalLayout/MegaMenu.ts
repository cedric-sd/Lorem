import styled from 'styled-components'
import { Dropdown, DropdownToggle } from 'reactstrap'

export const DropdownMega = styled(Dropdown)`
  position: static;
`
export const DropdownHeaderItem = styled(DropdownToggle)`
  position: relative;
  display: inline-block;
  overflow: hidden;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  height: 70px;
  box-shadow: none !important;
  color: #636e75;
  border: 0;
  border-radius: 0px;
  white-space: nowrap;
`
