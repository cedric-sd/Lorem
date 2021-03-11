import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

import * as S from 'styles/CommonForBoth/TopbarDropdown/LanguageDropdown'

const LanguageDropdown = () => {
  return (
    <>
      <Dropdown
        // isOpen={this.state.menu}
        // toggle={this.toggle}
        className="d-none d-sm-inline-block"
      >
        <DropdownToggle tag="button" className="btn header-item waves-effect">
          <img
            className=""
            // src={this.state.flag}
            alt="Language"
            height="16"
          />
          {'  '}
          <span className="align-middle">
            Default
            {/* {this.state.lng} */}
          </span>
        </DropdownToggle>

        <DropdownMenu right>
          <DropdownItem
            // active={this.state.lng === 'English' ? true : false}
            href=""
            // onClick={() => this.changeLanguageAction('eng')}
            className="notify-item"
          >
            {/* <img src={usFlag} alt="user" className="mr-1" height="12" />{' '} */}
            <span className="align-middle">English</span>
          </DropdownItem>

          <DropdownItem
            href=""
            // active={this.state.lng === 'Spanish' ? true : false}
            // onClick={() => this.changeLanguageAction('sp')}
            className="notify-item"
          >
            {/* <img src={spain} alt="user" className="mr-1" height="12" />{' '} */}
            <span className="align-middle">Spanish</span>
          </DropdownItem>

          <DropdownItem
            href=""
            // active={this.state.lng === 'German' ? true : false}
            // onClick={() => this.changeLanguageAction('gr')}
            className=" notify-item"
          >
            {/* <img src={germany} alt="user" className="mr-1" height="12" />{' '} */}
            <span className="align-middle">German</span>
          </DropdownItem>

          <DropdownItem
            href=""
            // active={this.state.lng === 'Italian' ? true : false}
            // onClick={() => this.changeLanguageAction('it')}
            className=" notify-item"
          >
            {/* <img src={italy} alt="user" className="mr-1" height="12" />{' '} */}
            <span className="align-middle">Italian</span>
          </DropdownItem>

          <DropdownItem
            href=""
            // active={this.state.lng === 'Russian' ? true : false}
            // onClick={() => this.changeLanguageAction('rs')}
            className=" notify-item"
          >
            {/* <img src={russia} alt="user" className="mr-1" height="12" />{' '} */}
            <span className="align-middle">Russian</span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </>
  )
}

export default LanguageDropdown
