import { Container, Row, Col } from 'reactstrap'

import HeaderToolbar from './HeaderToolbar'
import * as S from 'styles/CommonForBoth/BrowsePreview'

const BrowsePreview: React.FC = () => {
  return (
    <>
      <S.PageContent>
        <Container fluid={true}>
          <Row>
            <Col>
              <S.ComponentBrowser>
                <HeaderToolbar />
                <S.Canvas src="http://localhost:3000/PageCustom"></S.Canvas>
              </S.ComponentBrowser>
            </Col>
          </Row>
        </Container>
      </S.PageContent>
    </>
  )
}

export default BrowsePreview
