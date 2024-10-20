import { SidebarSections } from '@app/types/sidebarSections'
import { useSidebarSection } from '@hooks/useSidebarSection'
import BiegeBlock from '@shared/biegeBlock/biegeBlock'
import { PropsWithChildren } from 'react'

interface ISidebarButtonProps extends PropsWithChildren {
  icon: any
  name: string
  section: SidebarSections
  iconWidth: string
  iconHeight: string
}

const SidebarButton = ({ icon, name, children, section, iconWidth, iconHeight }: ISidebarButtonProps) => {
  const { openSection } = useSidebarSection(section)

  const handleClick = () => {
    openSection()
  }

  return (
    <BiegeBlock onClick={handleClick} className='sidebar-menu-button clickable w-[3.75rem] h-[3.75rem] bg-biege rounded-[.375rem] gap-[.1875rem] flex items-center justify-center flex-col cursor-pointer border-[.1rem] border-black'>
      <img style={{ width: iconWidth, height: iconHeight }} src={icon} alt='icon' />
      <span className='text text-[.625rem] z-10'>{name}</span>
      {children}
    </BiegeBlock>
  )
}

export default SidebarButton
