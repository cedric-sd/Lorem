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

import { BiArrowFromRight } from 'react-icons/bi'
import { RiApps2Line, RiSettings5Line } from 'react-icons/ri'
import { FaReact } from 'react-icons/fa'

//Import menuDropdown
import NotificationDropdown from 'components/CommonForBoth/TopbarDropdown/NotificationDropdown'
import ProfileMenu from 'components/CommonForBoth/TopbarDropdown/ProfileMenu'
//Import Megamenu
import Projects from './Projects'

import * as S from 'styles/VerticalLayout/Header'

const Header = () => {
  return (
    <>
      <S.PageTopbar id="page-topbar">
        <S.NavbarHeader className="navbar-header">
          <div className="d-flex">
            <S.NavbarBrandBox className="navbar-brand-box">
              <Link href="#">
                <S.Logo>
                  <span className="logo-sm">
                    {/* <img src={logosmdark} alt="" height="22" /> */}
                  </span>
                  <span className="logo-lg">
                    <img src="/images/LogoBGlight.png" alt="" height="22" />
                  </span>
                </S.Logo>
              </Link>

              {/* <Link href="#">
                <a className="logo logo-light">
                  <span className="logo-sm">
                    ok
                    <img src={logosmlight} alt="" height="22" />
                  </span>
                  <span className="logo-lg">
                    ok
                    <img src={logolight} alt="" height="20" />
                  </span>
                </a>
              </Link> */}
            </S.NavbarBrandBox>
            <Button
              size="sm"
              color="none"
              type="button"
              // onClick={this.toggleMenu}
              className="px-3 font-size-24 header-item waves-effect"
              id="vertical-menu-btn"
            >
              <BiArrowFromRight size={26} />
            </Button>
            <Projects />/ <FaReact className="ml-3 mr-1" /> Untitled
          </div>

          <div className="d-flex">
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

            <Dropdown
              // isOpen={this.state.isSocialPf}
              // toggle={() =>
              //   this.setState({ isSocialPf: !this.state.isSocialPf })
              // }
              className="d-none d-lg-inline-block ml-1"
            >
              <DropdownToggle
                tag="button"
                className="btn header-item noti-icon waves-effect"
              >
                <RiApps2Line />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-lg" right>
                <div className="px-lg-2">
                  <Row className="no-gutters">
                    <Col>
                      <Link href="#">
                        <a className="dropdown-icon-item">
                          github
                          {/* <img src={github} alt="Github" /> */}
                          {/* <span>{this.props.t('GitHub')}</span> */}
                        </a>
                      </Link>
                    </Col>
                    <Col>
                      <Link href="#">
                        <a className="dropdown-icon-item">bitbucket</a>
                        {/* <img src={bitbucket} alt="bitbucket" /> */}
                        {/* <span>{this.props.t('Bitbucket')}</span> */}
                      </Link>
                    </Col>
                    <Col>
                      <Link href="#">
                        <a className="dropdown-icon-item">dribbble</a>
                        {/* <img src={dribbble} alt="dribbble" /> */}
                        {/* <span>{this.props.t('Dribbble')}</span> */}
                      </Link>
                    </Col>
                  </Row>

                  <Row className="no-gutters">
                    <Col>
                      <Link href="#">
                        <a className="dropdown-icon-item">dropbox</a>
                        {/* <img src={dropbox} alt="dropbox" /> */}
                        {/* <span>{this.props.t('Dropbox')}</span> */}
                      </Link>
                    </Col>
                    <Col>
                      <Link href="#">
                        <a className="dropdown-icon-item">mail-chimp</a>
                        {/* <img src={mail_chimp} alt="mail_chimp" /> */}
                        {/* <span>{this.props.t('Mail Chimp')}</span> */}
                      </Link>
                    </Col>
                    <Col>
                      <Link href="#">
                        <a className="dropdown-icon-item">slack</a>
                        {/* <img src={slack} alt="slack" /> */}
                        {/* <span>{this.props.t('Slack')}</span> */}
                      </Link>
                    </Col>
                  </Row>
                </div>
              </DropdownMenu>
            </Dropdown>

            <NotificationDropdown />

            <ProfileMenu />

            <div className="dropdown d-inline-block">
              <Button
                color="none"
                // onClick={this.toggleRightbar}
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
