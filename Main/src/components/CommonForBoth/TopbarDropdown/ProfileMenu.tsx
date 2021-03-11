import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

import { FiChevronDown } from 'react-icons/fi'

const ProfileMenu = () => {
  return (
    <>
      <Dropdown
        // isOpen={this.state.menu}
        // toggle={this.toggle}
        className="d-inline-block user-dropdown"
      >
        <DropdownToggle
          tag="button"
          className="btn header-item waves-effect"
          id="page-header-user-dropdown"
        >
          {/* <img
            className="rounded-circle header-profile-user mr-1"
            src={avatar2}
            alt="Header Avatar"
          /> */}
          <span className="d-none d-xl-inline-block ml-1 text-transform">
            Admin
            {/* {username} */}
          </span>
          <FiChevronDown />
          {/* <i className="mdi mdi-chevron-down d-none ml-1 d-xl-inline-block"></i> */}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem href="#">
            <i className="ri-user-line align-middle mr-1"></i>{' '}
            {/* {this.props.t('Profile')} */}
          </DropdownItem>
          <DropdownItem href="#">
            <i className="ri-wallet-2-line align-middle mr-1"></i>{' '}
            {/* {this.props.t('My Wallet')} */}
          </DropdownItem>
          <DropdownItem className="d-block" href="#">
            <span className="badge badge-success float-right mt-1">11</span>
            <i className="ri-settings-2-line align-middle mr-1"></i>{' '}
            {/* {this.props.t('Settings')} */}
          </DropdownItem>
          <DropdownItem href="#">
            <i className="ri-lock-unlock-line align-middle mr-1"></i>{' '}
            {/* {this.props.t('Lock screen')} */}
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem className="text-danger" href="/logout">
            <i className="ri-shut-down-line align-middle mr-1 text-danger"></i>{' '}
            {/* {this.props.t('Logout')} */}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

export default ProfileMenu
