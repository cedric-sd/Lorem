//third part
import { Label, Input } from 'reactstrap'
import { CgCloseO } from 'react-icons/cg'
import SimpleBar from 'simplebar-react'
//contexts
import { toggleSettings } from 'contexts/HeaderActions'
//internal components
import LanguageDropdown from 'components/CommonForBoth/TopbarDropdown/LanguageDropdown'
//styles
import * as S from 'styles/CommonForBoth/Settingsbar'

const Settingsbar: React.FC = () => {
  return (
    <>
      <S.Settingsbar>
        <SimpleBar style={{ height: '900px' }}>
          <div data-simplebar className="h-100">
            <S.SettingsbarTitle className="px-3">
              <button
                className="right-bar-toggle float-right"
                onClick={() => {
                  toggleSettings()
                }}
              >
                <CgCloseO />
              </button>
              <h5 className="m-0">Settings</h5>
            </S.SettingsbarTitle>

            <hr className="my-0" />

            <div className="p-4">
              <LanguageDropdown />

              <hr className="mt-1" />

              <div className="radio-toolbar">
                <span className="mb-2 d-block" id="radio-title">
                  Layout Width
                </span>
                <Input
                  type="radio"
                  id="radioFluid"
                  name="radioWidth"
                  value="fluid"
                  // checked={this.state.layoutWidth !== 'boxed'}
                  // onChange={this.changeLayoutWidth}
                />
                <Label htmlFor="radioFluid">Fluid</Label>
                {'   '}
                <Input
                  type="radio"
                  id="radioBoxed"
                  name="radioWidth"
                  value="boxed"
                  // checked={this.state.layoutWidth === 'boxed'}
                  // onChange={this.changeLayoutWidth}
                />
                <Label htmlFor="radioBoxed">Boxed</Label>
              </div>
              <hr className="mt-1" />

              <div className="radio-toolbar">
                <span className="mb-2 d-block" id="radio-title">
                  Topbar Theme
                </span>
                <Input
                  type="radio"
                  id="radioThemeLight"
                  name="radioTheme"
                  value="light"
                  // checked={this.state.topbarTheme === 'light'}
                  // onChange={this.changeTopbarTheme}
                />

                <Label htmlFor="radioThemeLight">Light</Label>
                {'   '}
                <Input
                  type="radio"
                  id="radioThemeDark"
                  name="radioTheme"
                  value="dark"
                  // checked={this.state.topbarTheme === 'dark'}
                  // onChange={this.changeTopbarTheme}
                />
                <Label htmlFor="radioThemeDark">Dark</Label>
                {'   '}
              </div>
            </div>
          </div>
        </SimpleBar>
      </S.Settingsbar>
      <S.SettingsbarOrvelay></S.SettingsbarOrvelay>
    </>
  )
}

export default Settingsbar
