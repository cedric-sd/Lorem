import { useState } from 'react'

import { Button, Label, FormGroup, Input } from 'reactstrap'
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi'

import * as S from 'styles/CommonForBoth/Rightbar'

const RightSideBar: React.FC = () => {
  const [isRightbarShow, setIsRightbarShow] = useState(true)

  const toggle = () => setIsRightbarShow(!isRightbarShow)

  return (
    <>
      {isRightbarShow ? (
        <S.Container>
          <div>
            <ul className="list-unstyled">
              <li>
                <div className="d-flex align-items-center mt-2">
                  <S.MenuTitle>Content</S.MenuTitle>
                  <Button
                    size="sm"
                    color="none"
                    type="button"
                    onClick={toggle}
                    className="px-2 font-size-24 header-item waves-effect"
                    id="vertical-menu-btn"
                  >
                    <BiArrowFromLeft size={26} />
                  </Button>
                </div>
              </li>
              <li>
                <FormGroup className="m-3">
                  <Label for="exampleEmail">Texto 1</Label>
                  <Input
                    type="text"
                    name="text1"
                    id="exampleEmail"
                    placeholder="Algum valor aqui..."
                  />
                </FormGroup>
              </li>
              <li>
                <FormGroup className="m-3">
                  <Label for="exampleText">Text Area</Label>
                  <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
              </li>
              <li>
                <FormGroup className="m-3">
                  <Label for="exampleEmail">Texto 1</Label>
                  <Input
                    type="text"
                    name="text1"
                    placeholder="Algum valor aqui..."
                  />
                </FormGroup>
              </li>
              <li>
                <FormGroup className="m-3">
                  <Label for="exampleEmail">Texto 1</Label>
                  <Input
                    type="text"
                    name="text1"
                    placeholder="Algum valor aqui..."
                  />
                </FormGroup>
              </li>
            </ul>
          </div>
        </S.Container>
      ) : (
        <S.CondensedRightbar>
          <Button
            size="sm"
            color="none"
            type="button"
            onClick={toggle}
            className="px-2 mt-2 font-size-24 header-item waves-effect"
            id="vertical-menu-btn"
          >
            <BiArrowFromRight size={26} />
          </Button>
        </S.CondensedRightbar>
      )}
    </>
  )
}

export default RightSideBar
