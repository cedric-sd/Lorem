import { useState } from 'react'

import { DropdownMenu, DropdownItem } from 'reactstrap'
import { BiFolder } from 'react-icons/bi'

import * as S from 'styles/VerticalLayout/Projects'

const Projects = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen((prevState) => !prevState)
  return (
    <>
      <S.DropdownProjects
        className="d-none d-lg-block ml-4"
        isOpen={dropdownOpen}
        toggle={toggle}
      >
        <S.DropdownHeaderItem
          tag="button"
          type="button"
          caret
          className="btn header-item waves-effect"
        >
          <BiFolder className="mr-2" />
          Projects
          {/* {this.props.t('Mega Menu')}  */}
        </S.DropdownHeaderItem>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem text>Dropdown Item Text</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </S.DropdownProjects>
    </>
  )
}

export default Projects
