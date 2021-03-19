import styled from 'styled-components'

export const Container = styled.div`
  width: 340px;
  z-index: 1002;
  background: #fff;
  bottom: 0;
  top: 0;
  left: 200px;
  margin-top: 0;
  position: fixed;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
`
export const PreviewImage = styled.div`
  margin: 32px 5px;
  height: 110px;
  :hover {
    cursor: grab;
  }
`
export const Overlay = styled.div`
  background-color: rgba(52, 58, 64, 0.55);
  position: absolute;
  left: 540px;
  right: 0;
  top: 0;
  bottom: 0;
  display: block;
  z-index: 9998;
  transition: all 0.2s ease-out;
`
