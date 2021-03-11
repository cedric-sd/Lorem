//Simple bar
import SimpleBar from 'simplebar-react'

import SidebarContent from './SidebarContent'

const Sidebar = () => {
  return (
    <>
      <div className="vertical-menu">
        <div data-simplebar className="h-100">
          {/* {this.props.type !== 'condensed' ? (
            <SimpleBar style={{ maxHeight: '100%' }}>
              <SidebarContent />
            </SimpleBar>
          ) : ( */}
          <SidebarContent />
          {/* )} */}
        </div>
      </div>
    </>
  )
}

export default Sidebar
