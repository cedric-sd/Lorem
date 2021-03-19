import { useState } from 'react'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

import { FiChevronDown, FiUser } from 'react-icons/fi'
import { IoWalletOutline } from 'react-icons/io5'
import { AiOutlinePoweroff } from 'react-icons/ai'
import { RiSettings5Line } from 'react-icons/ri'
import { BiLock } from 'react-icons/bi'

import * as S from 'styles/CommonForBoth/TopbarDropdown/ProfileMenu'

const ProfileMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen((prevState) => !prevState)

  return (
    <>
      <Dropdown
        isOpen={dropdownOpen}
        toggle={toggle}
        className="d-inline-block user-dropdown"
      >
        <DropdownToggle
          tag="button"
          className="btn header-item waves-effect"
          id="page-header-user-dropdown"
        >
          <S.HeaderProfileMenu
            className="rounded-circle mr-1"
            src={'/images/avatar-5.jpg'}
            alt="Header Avatar"
          />
          <span className="d-none d-xl-inline-block ml-1 text-transform">
            Admin
            {/* {username} */}
          </span>
          <FiChevronDown />
          {/* <i className="mdi mdi-chevron-down d-none ml-1 d-xl-inline-block"></i> */}
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem href="#">
            <FiUser className="align-middle mr-1" /> Profile{' '}
            {/* {this.props.t('Profile')} */}
          </DropdownItem>
          <DropdownItem href="#">
            <IoWalletOutline className="align-middle mr-1" /> My Wallet
            {/* {this.props.t('My Wallet')} */}
          </DropdownItem>
          <DropdownItem className="d-block" href="#">
            <span className="badge badge-success float-right mt-1">11</span>
            <RiSettings5Line className="align-middle mr-1" /> Settings
            {/* {this.props.t('Settings')} */}
          </DropdownItem>
          <DropdownItem href="#">
            <BiLock className="align-middle mr-1" /> Lock screen
            {/* {this.props.t('Lock screen')} */}
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem className="text-danger" href="/logout">
            <AiOutlinePoweroff className="align-middle mr-1 text-danger" />{' '}
            Logout
            {/* {this.props.t('Logout')} */}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

export default ProfileMenu
