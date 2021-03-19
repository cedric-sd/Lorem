//contexts
import { toggleDragNDropBar } from 'contexts/DragNDropActions'

import { FiLayout } from 'react-icons/fi'
import { CgComponents } from 'react-icons/cg'

import * as S from 'styles/VerticalLayout/SidebarContent'

const SidebarContent = () => {
  return (
    <>
      <div id="sidebar-menu">
        <ul className="list-unstyled" id="side-menu">
          <S.MenuTitle>
            <FiLayout />
            Layout
            {/* {this.props.t('Cedric')} */}
          </S.MenuTitle>

          <li>
            <S.ElementOption onClick={() => toggleDragNDropBar(true)}>
              <span className="ml-1">
                option 1{/* {this.props.t('Dashboard')} */}
              </span>
            </S.ElementOption>
          </li>

          <li>
            <S.ElementOption onClick={() => toggleDragNDropBar(true)}>
              <span className="ml-1">
                option 2{/* {this.props.t('Dashboard')} */}
              </span>
            </S.ElementOption>
          </li>

          <S.MenuTitle>
            <CgComponents />
            Components
            {/* {this.props.t('Pages')} */}
          </S.MenuTitle>

          <li>
            <S.ElementOption onClick={() => toggleDragNDropBar(true)}>
              <span className="ml-1">
                option 1{/* {this.props.t('Dashboard')} */}
              </span>
            </S.ElementOption>
          </li>

          <li>
            <S.ElementOption onClick={() => toggleDragNDropBar(true)}>
              <span className="ml-1">
                option 2{/* {this.props.t('Dashboard')} */}
              </span>
            </S.ElementOption>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SidebarContent
