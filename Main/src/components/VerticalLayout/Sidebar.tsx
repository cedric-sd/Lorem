//Simple bar
import SimpleBar from 'simplebar-react'
import SidebarContent from './SidebarContent'

import { useEntity } from 'simpler-state'
import { isElementsSidebarShow } from 'contexts/HeaderActions'

import * as S from 'styles/VerticalLayout/Sidebar'

const Sidebar = () => {
  const handleToggleElementsSidebar = useEntity(isElementsSidebarShow)
  return (
    <>
      {handleToggleElementsSidebar ? (
        <S.VerticalMenu>
          <S.ContainerSimpleBar className="h-100">
            <SimpleBar style={{ maxHeight: '100%' }}>
              <SidebarContent />
            </SimpleBar>
          </S.ContainerSimpleBar>
        </S.VerticalMenu>
      ) : null}
    </>
  )
}

export default Sidebar
