import { entity } from 'simpler-state'

export const isDragNDropBarShow = entity(false)

export const toggleDragNDropBar = (props: boolean) => {
  isDragNDropBarShow.set(props)
}
