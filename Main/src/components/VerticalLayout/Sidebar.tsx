//Simple bar
import SimpleBar from 'simplebar-react'
import SidebarContent from './SidebarContent'

import * as S from 'styles/VerticalLayout/Sidebar'

const Sidebar = () => {
  return (
    <>
      <S.VerticalMenu className="vertical-menu">
        <S.ContainerSimpleBar className="h-100">
          {/* {this.props.type !== 'condensed' ? () : ( */}
          <SimpleBar style={{ maxHeight: '100%' }}>
            <SidebarContent />
          </SimpleBar>
          {/* )} */}
        </S.ContainerSimpleBar>
      </S.VerticalMenu>
    </>
  )
}

export default Sidebar
