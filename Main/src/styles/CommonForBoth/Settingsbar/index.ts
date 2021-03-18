import styled from 'styled-components'

export const Settingsbar = styled.div`
  background-color: #fff;
  box-shadow: 0 0 24px 0 rgb(0 0 0 / 6%), 0 1px 0 0 rgb(0 0 0 / 2%);
  display: block;
  position: fixed;
  transition: all 200ms ease-out;
  width: 280px;
  z-index: 9999;
  float: right !important;
  right: 0px;
  top: 0;
  bottom: 0;
`
export const SettingsbarTitle = styled.div`
  padding: 13px 0;
`
export const SettingsbarOrvelay = styled.div`
  background-color: rgba(52, 58, 64, 0.55);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: block;
  z-index: 9998;
  transition: all 0.2s ease-out;
`
