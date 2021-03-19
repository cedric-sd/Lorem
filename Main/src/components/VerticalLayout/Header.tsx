import Link from 'next/link'
import {
  Button,
  Col,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroup,
  Row
} from 'reactstrap'
//contexts
import { useEntity } from 'simpler-state'
import {
  isElementsSidebarShow,
  toggleSettings,
  toggleElementsSidebar
} from 'contexts/HeaderActions'

import { BiArrowFromRight, BiArrowFromLeft } from 'react-icons/bi'
import { RiApps2Line, RiSettings5Line } from 'react-icons/ri'
import { FaReact } from 'react-icons/fa'

//Import menuDropdown
import NotificationDropdown from 'components/CommonForBoth/TopbarDropdown/NotificationDropdown'
import ProfileMenu from 'components/CommonForBoth/TopbarDropdown/ProfileMenu'
import Projects from './Projects'

import * as S from 'styles/VerticalLayout/Header'

const Header = () => {
  const handleIsElementsSidebarShow = useEntity(isElementsSidebarShow)

  return (
    <>
      <S.PageTopbar id="page-topbar">
        <S.NavbarHeader className="navbar-header">
          <div className="d-flex">
            <S.NavbarBrandBox className="navbar-brand-box">
              <Link href="#">
                <S.Logo>
                  {handleIsElementsSidebarShow ? (
                    <span className="logo-lg">
                      <img src="/images/LogoBGlight.png" alt="" height="22" />
                    </span>
                  ) : (
                    <span className="logo-sm">
                      <img src={'/images/LogoSmall.png'} alt="" height="22" />
                    </span>
                  )}
                </S.Logo>
              </Link>
              <Button
                size="sm"
                color="none"
                type="button"
                onClick={() => toggleElementsSidebar()}
                className="px-2 font-size-24 header-item waves-effect"
                id="vertical-menu-btn"
              >
                {handleIsElementsSidebarShow ? (
                  <BiArrowFromRight size={26} />
                ) : (
                  <BiArrowFromLeft size={26} />
                )}
              </Button>
            </S.NavbarBrandBox>

            <Projects />

            <div className="d-flex align-items-center">
              / <FaReact className="ml-3 mr-1" /> Untitled
            </div>
          </div>

          <div className="d-flex align-items-center">
            <div className="dropdown d-inline-block d-lg-none ml-2">
              <button
                type="button"
                // onClick={() => {
                //   this.setState({ isSearch: !this.state.isSearch })
                // }}
                className="btn header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
              >
                <i className="ri-search-line"></i>
              </button>
              <div
                // className={
                //   this.state.isSearch === true
                //     ? 'dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 show'
                //     : 'dropdown-menu dropdown-menu-lg dropdown-menu-right p-0'
                // }
                aria-labelledby="page-header-search-dropdown"
              >
                <Form className="p-3">
                  <FormGroup className="m-0">
                    <InputGroup>
                      <Input
                        type="text"
                        className="form-control"
                        // placeholder={this.props.t('Search')}
                      />
                      <InputGroupAddon addonType="append">
                        <Button color="primary" type="submit">
                          <i className="ri-search-line"></i>
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Form>
              </div>
            </div>

            <Button className="mr-3" outline color="primary" size="sm">
              Export project
            </Button>

            <ProfileMenu />

            <div className="dropdown d-inline-block">
              <Button
                color="none"
                onClick={() => toggleSettings()}
                type="button"
                className="header-item noti-icon right-bar-toggle waves-effect"
              >
                <RiSettings5Line />
              </Button>
            </div>
          </div>
        </S.NavbarHeader>
      </S.PageTopbar>
    </>
  )
}

export default Header
