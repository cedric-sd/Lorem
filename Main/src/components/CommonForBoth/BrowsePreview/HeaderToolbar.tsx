import React from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'

import { GoPrimitiveDot } from 'react-icons/go'
import { FaDesktop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa'

import * as S from 'styles/CommonForBoth/BrowsePreview/HeaderToolbar'

const HeaderToolbar: React.FC = () => {
  return (
    <>
      <S.Container>
        <div>
          <S.ButtonsBrowser className="text-danger">
            <GoPrimitiveDot />
          </S.ButtonsBrowser>
          <S.ButtonsBrowser className="text-warning">
            <GoPrimitiveDot />
          </S.ButtonsBrowser>
          <S.ButtonsBrowser className="text-success">
            <GoPrimitiveDot />
          </S.ButtonsBrowser>
        </div>
        <div className="w-50">
          <InputGroup size="sm">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>https://</InputGroupText>
            </InputGroupAddon>
            <Input placeholder="username" />
          </InputGroup>
        </div>
        <div>
          <S.ButtonsDevice className="text-muted">
            <FaDesktop />
          </S.ButtonsDevice>
          <S.ButtonsDevice className="text-muted ml-2">
            <FaTabletAlt />
          </S.ButtonsDevice>
          <S.ButtonsDevice className="text-muted ml-2">
            <FaMobileAlt />
          </S.ButtonsDevice>
        </div>
      </S.Container>
    </>
  )
}

export default HeaderToolbar
