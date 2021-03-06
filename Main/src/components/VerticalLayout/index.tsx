import { Player } from '@lottiefiles/react-lottie-player'
import { useEntity } from 'simpler-state'

import { isSettingsMenuShow } from 'contexts/HeaderActions'

// Layout Related Components
import Header from './Header'
import Sidebar from './Sidebar'
import BrowsePreview from 'components/CommonForBoth/BrowsePreview'
import RightSideBar from 'components/CommonForBoth/Rightbar'
import Settingsbar from 'components/CommonForBoth/Settingsbar'
import DragComponentsBar from 'components/VerticalLayout/DragComponentsBar'

import * as S from 'styles/VerticalLayout/index'

const Layout: React.FC = () => {
  const handleToggleSettings = useEntity(isSettingsMenuShow)

  return (
    <>
      <S.Container id="preloader">
        <div id="status">
          <Player
            autoplay
            loop
            src="/animations/code-window.json"
            style={{ height: '300px', width: '300px' }}
          ></Player>
        </div>
      </S.Container>

      <div id="layout-wrapper">
        <Header />
        <Sidebar />
        <DragComponentsBar />

        <S.MainContent>
          <BrowsePreview />
        </S.MainContent>

        <RightSideBar />
        {handleToggleSettings ? <Settingsbar /> : null}
      </div>
    </>
  )
}

export default Layout
