// Layout Related Components
import Header from './Header'
import Sidebar from './Sidebar'
import BrowsePreview from 'components/CommonForBoth/BrowsePreview'
import RightSideBar from 'components/CommonForBoth/Rightbar'
import Settingsbar from 'components/CommonForBoth/Settingsbar'

import * as S from 'styles/VerticalLayout/index'
import { Player } from '@lottiefiles/react-lottie-player'

const Layout: React.FC = () => {
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
        <Sidebar
        // theme={this.props.leftSideBarTheme}
        // type={this.props.leftSideBarType}
        // isMobile={this.state.isMobile}
        />
        <S.MainContent>
          <BrowsePreview />
        </S.MainContent>
        <RightSideBar />
        {/* <Settingsbar /> */}
      </div>
    </>
  )
}

export default Layout
