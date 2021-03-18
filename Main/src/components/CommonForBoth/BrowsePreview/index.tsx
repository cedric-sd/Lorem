import React from 'react'
import HeaderToolbar from './HeaderToolbar'

import { Container, Row, Col } from 'reactstrap'

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
                <S.Canvas>canvas</S.Canvas>
              </S.ComponentBrowser>
            </Col>
          </Row>
        </Container>
      </S.PageContent>
    </>
  )
}

export default BrowsePreview
