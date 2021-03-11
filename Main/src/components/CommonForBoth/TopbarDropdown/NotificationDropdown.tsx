import Link from 'next/link'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  Row,
  Col,
  Media
} from 'reactstrap'
import SimpleBar from 'simplebar-react'

import { IoNotificationsOutline } from 'react-icons/io5'

const NotificationDropdown = () => {
  return (
    <>
      <Dropdown
        // isOpen={this.state.menu}
        // toggle={this.toggle}
        className="d-inline-block"
      >
        <DropdownToggle
          tag="button"
          className="btn header-item noti-icon waves-effect"
          id="page-header-notifications-dropdown"
        >
          <IoNotificationsOutline />
          <span className="noti-dot"></span>
        </DropdownToggle>
        <DropdownMenu
          right
          className="dropdown-menu-lg p-0"
          aria-labelledby="page-header-notifications-dropdown"
        >
          <div className="p-3">
            <Row className="align-items-center">
              <Col>
                <h6 className="m-0">
                  {' '}
                  Notifications
                  {/* {this.props.t('Notifications')}{' '} */}
                </h6>
              </Col>
              <div className="col-auto">
                <Link href="#">
                  <a className="small">View All</a>
                  {/* {' '}
                  {this.props.t('View All')} */}
                </Link>
              </div>
            </Row>
          </div>
          <SimpleBar style={{ maxHeight: '230px' }}>
            <Link href="#">
              <a className="text-reset notification-item">
                <Media>
                  <div className="avatar-xs mr-3">
                    <span className="avatar-title bg-primary rounded-circle font-size-16">
                      <i className="ri-shopping-cart-line"></i>
                    </span>
                  </div>
                  <Media body>
                    <h6 className="mt-0 mb-1">
                      {/* {this.props.t('Your order is placed')} */}
                    </h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1">
                        {/* {this.props.t(
                          'If several languages coalesce the grammar'
                        )} */}
                      </p>
                      <p className="mb-0">
                        <i className="mdi mdi-clock-outline"></i>{' '}
                        {/* {this.props.t('3 min ago')} */}
                      </p>
                    </div>
                  </Media>
                </Media>
              </a>
            </Link>
            <Link href="#">
              <a className="text-reset notification-item">
                <Media>
                  {/* <img
                  src={avatar3}
                  className="mr-3 rounded-circle avatar-xs"
                  alt="user-pic"
                /> */}
                  <Media body>
                    <h6 className="mt-0 mb-1">
                      James Lemire
                      {/* {this.props.t('James Lemire')} */}
                    </h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1">
                        It will seem like simplified English.
                        {/* {this.props.t('It will seem like simplified English.')} */}
                      </p>
                      <p className="mb-0">
                        <i className="mdi mdi-clock-outline"></i> 1 hours ago
                        {/* {this.props.t('1 hours ago')} */}
                      </p>
                    </div>
                  </Media>
                </Media>
              </a>
            </Link>
            <Link href="#">
              <a className="text-reset notification-item">
                <Media>
                  <div className="avatar-xs mr-3">
                    <span className="avatar-title bg-success rounded-circle font-size-16">
                      <i className="ri-checkbox-circle-line"></i>
                    </span>
                  </div>
                  <Media body>
                    <h6 className="mt-0 mb-1">
                      Your item is shipped
                      {/* {this.props.t('Your item is shipped')} */}
                    </h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1">
                        If several languages coalesce the grammar
                        {/* {this.props.t(
                          'If several languages coalesce the grammar'
                        )} */}
                      </p>
                      <p className="mb-0">
                        <i className="mdi mdi-clock-outline"></i> 3 min ago
                        {/* {this.props.t('3 min ago')} */}
                      </p>
                    </div>
                  </Media>
                </Media>
              </a>
            </Link>

            <Link href="#">
              <a className="text-reset notification-item">
                <Media>
                  {/* <img
                    src={avatar4}
                    className="mr-3 rounded-circle avatar-xs"
                    alt="user-pic"
                  /> */}
                  <Media body>
                    <h6 className="mt-0 mb-1">
                      Salena Layfield
                      {/* {this.props.t('Salena Layfield')} */}
                    </h6>
                    <div className="font-size-12 text-muted">
                      <p className="mb-1">
                        As a skeptical Cambridge friend of mine occidental.
                        {/* {this.props.t(
                          'As a skeptical Cambridge friend of mine occidental.'
                        )} */}
                      </p>
                      <p className="mb-0">
                        <i className="mdi mdi-clock-outline"></i> 1 hours ago
                        {/* {this.props.t('1 hours ago')} */}
                      </p>
                    </div>
                  </Media>
                </Media>
              </a>
            </Link>
          </SimpleBar>
          <div className="p-2 border-top">
            <Link href="#">
              <a className="btn btn-sm btn-link font-size-14 btn-block text-center">
                <i className="mdi mdi-arrow-right-circle mr-1"></i>
                View More
                {/* {this.props.t(' View More')} */}
              </a>
            </Link>
          </div>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

export default NotificationDropdown
