// import Link from 'next/link'

// import { DropdownMenu, Row, Col } from 'reactstrap'
import { BiFolder } from 'react-icons/bi'

import * as S from 'styles/VerticalLayout/Projects'

const Projects = () => {
  return (
    <>
      <S.DropdownProjects
        className="d-none d-lg-block ml-4"
        // isOpen={this.state.megaMenu}
        // toggle={() => {
        //   this.setState({ megaMenu: !this.state.megaMenu })
        // }}
      >
        <S.DropdownHeaderItem
          tag="button"
          type="button"
          // caret
          className="btn header-item waves-effect"
        >
          <BiFolder className="mr-2" />
          Projects
          {/* {this.props.t('Mega Menu')}  */}
        </S.DropdownHeaderItem>
        {/*<DropdownMenu className="dropdown-megamenu">
           <Row>
            <Col sm={8}>
              <Row>
                <Col md={4}>
                  <h5 className="font-size-14 mt-0">
                    {this.props.t('UI Components')}
                  </h5>
                  <ul className="list-unstyled megamenu-list">
                    <li>
                      <Link to="#">{this.props.t('Lightbox')}</Link>
                    </li>
                    <li>
                      <Link to="#">{this.props.t('Range Slider')}</Link>
                    </li>
                    <li>
                      <Link to="#">{this.props.t('Sweet Alert')}</Link>
                    </li>
                    <li>
                      <Link to="#">{this.props.t('Rating')}</Link>
                    </li>
                    <li>
                      <Link to="#">{this.props.t('Forms')}</Link>
                    </li>
                    <li>
                      <Link to="#">{this.props.t('Tables')}</Link>
                    </li>
                    <li>
                      <Link to="#">{this.props.t('Charts')}</Link>
                    </li>
                  </ul>
                </Col>

          </Row>
        </DropdownMenu>*/}
      </S.DropdownProjects>
    </>
  )
}

export default Projects
