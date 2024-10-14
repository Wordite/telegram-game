import { useDispatch } from 'react-redux'
import { setSection } from '@app/store/slices/sidebar'
import { SidebarSections } from '@app/types/sidebarSections'

export const useSidebarSection = (section: SidebarSections) => {
  const dispatch = useDispatch()

  return {
    openSection: () => dispatch(setSection(section)),
    closeSection: () => dispatch(setSection('')),
  }
}
