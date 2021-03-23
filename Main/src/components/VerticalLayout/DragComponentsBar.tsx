import React from 'react'
import { useEntity } from 'simpler-state'

import {
  toggleDragNDropBar,
  isDragNDropBarShow
} from 'contexts/DragNDropActions'

import PreviewComponent from './PreviewComponent'
import * as S from 'styles/VerticalLayout/DragComponentBar'

const DragComponentsBar: React.FC = () => {
  const handleIsDragNDropBarShow = useEntity(isDragNDropBarShow)
  return (
    <>
      <S.Container displayed={handleIsDragNDropBarShow}>
        <ul>
          <li className="p-3 text-muted">
            <h4>Sections</h4>
          </li>
          <li>
            <PreviewComponent />
          </li>
          <li>
            <PreviewComponent />
          </li>
          <li>
            <PreviewComponent />
          </li>
        </ul>
      </S.Container>
      <S.Overlay
        displayed={handleIsDragNDropBarShow}
        onClick={() => toggleDragNDropBar(false)}
      ></S.Overlay>
    </>
  )
}

export default DragComponentsBar
