import styled from 'styled-components'
import { Card } from 'reactstrap'

export const PreviewImage = styled(Card)`
  margin: 32px 5px;
  height: auto;
  background-image: url('./images/teste.png');
  background-repeat: no-repeat;
  background-size: cover;
  height: 240px;
  :hover {
    cursor: grab;
  }
`
