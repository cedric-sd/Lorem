import styled from 'styled-components'

interface Props {
  displayed: boolean
}

export const Container = styled.div`
  width: 340px;
  z-index: 1002;
  background: #fff;
  bottom: 0;
  top: 0;
  left: ${(props: Props) => (props.displayed ? '200px' : '-340px')};
  margin-top: 0;
  position: fixed;
  box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
`
export const Overlay = styled.div`
  background-color: rgba(52, 58, 64, 0.55);
  position: absolute;
  left: 540px;
  right: 0;
  top: 0;
  bottom: 0;
  display: ${(props: Props) => (props.displayed ? 'block' : 'none')};
  z-index: 9998;
  transition: all 0.2s ease-out;
`
