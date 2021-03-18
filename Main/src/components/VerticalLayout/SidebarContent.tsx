import { useState } from 'react'
import Link from 'next/link'

import * as S from 'styles/VerticalLayout/SidebarContent'

const SidebarContent = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <>
      <div id="sidebar-menu">
        <ul className="list-unstyled" id="side-menu">
          <S.MenuTitle>
            Layout
            {/* {this.props.t('Cedric')} */}
          </S.MenuTitle>

          <li>
            <Link href="#">
              <S.ElementOption>
                <i className="ri-dashboard-line"></i>
                {/* <span className="badge badge-pill badge-success float-right">
                  3
                </span> */}
                <span className="ml-1">
                  option 1{/* {this.props.t('Dashboard')} */}
                </span>
              </S.ElementOption>
            </Link>
          </li>

          <li>
            <Link href="#">
              <S.ElementOption>
                <i className="ri-dashboard-line"></i>
                {/* <span className="badge badge-pill badge-success float-right">
                  3
                </span> */}
                <span className="ml-1">
                  option 2{/* {this.props.t('Dashboard')} */}
                </span>
              </S.ElementOption>
            </Link>
          </li>

          <S.MenuTitle>
            Components
            {/* {this.props.t('Pages')} */}
          </S.MenuTitle>

          <li>
            <Link href="#">
              <S.ElementOption>
                <i className="ri-dashboard-line"></i>
                {/* <span className="badge badge-pill badge-success float-right">
                  3
                </span> */}
                <span className="ml-1">
                  option 1{/* {this.props.t('Dashboard')} */}
                </span>
              </S.ElementOption>
            </Link>
          </li>

          <li>
            <Link href="#">
              <S.ElementOption>
                <i className="ri-dashboard-line"></i>
                {/* <span className="badge badge-pill badge-success float-right">
                  3
                </span> */}
                <span className="ml-1">
                  option 2{/* {this.props.t('Dashboard')} */}
                </span>
              </S.ElementOption>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SidebarContent
