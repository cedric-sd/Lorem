import React from 'react'
import { Card, CardImg } from 'reactstrap'

import { toggleDragNDropBar } from 'contexts/DragNDropActions'

import * as S from 'styles/VerticalLayout/DragComponentBar'

const DragComponentsBar: React.FC = () => {
  return (
    <>
      <S.Container>
        <ul>
          <li className="p-3 text-muted">
            <h4>Sections</h4>
          </li>
          <li>
            <S.PreviewImage>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="/assets/256x186.svg"
                  alt="Card image cap"
                />
              </Card>
            </S.PreviewImage>
          </li>
          <li>
            <S.PreviewImage>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="/assets/256x186.svg"
                  alt="Card image cap"
                />
              </Card>
            </S.PreviewImage>
          </li>
          <li>
            <S.PreviewImage>
              <Card>
                <CardImg
                  top
                  width="100%"
                  src="/assets/256x186.svg"
                  alt="Card image cap"
                />
              </Card>
            </S.PreviewImage>
          </li>
        </ul>
      </S.Container>
      <S.Overlay onClick={() => toggleDragNDropBar(false)}></S.Overlay>
    </>
  )
}

export default DragComponentsBar
