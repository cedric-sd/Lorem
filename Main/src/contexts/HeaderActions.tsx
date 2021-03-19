import { entity } from 'simpler-state'

export const isSettingsMenuShow = entity(false)
export const isElementsSidebarShow = entity(true)

export const toggleSettings = () => {
  isSettingsMenuShow.set(!isSettingsMenuShow.get())
}

export const toggleElementsSidebar = () => {
  isElementsSidebarShow.set(!isElementsSidebarShow.get())
}
