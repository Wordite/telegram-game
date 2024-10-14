import { SidebarSections } from '@app/types/sidebarSections'
import { useSidebarSection } from '@hooks/useSidebarSection'
import BiegeBlock from '@shared/biegeBlock/biegeBlock'
import { PropsWithChildren } from 'react'

interface ISidebarButtonProps extends PropsWithChildren {
  icon: any
  name: string
  section: SidebarSections
  iconWidth: number
  iconHeight: number
}

const SidebarButton = ({ icon, name, children, section, iconWidth, iconHeight }: ISidebarButtonProps) => {
  const { openSection } = useSidebarSection(section)

  const handleClick = () => {
    openSection()
  }

  return (
    <BiegeBlock onClick={handleClick} className='sidebar-menu-button clickable w-[60px] h-[60px] bg-biege rounded-[6px] gap-[3px] flex items-center justify-center flex-col cursor-pointer border-[1.6px] border-black'>
      <img style={{ width: iconWidth + 'px', height: iconHeight + 'px' }} src={icon} alt='icon' />
      <span className='text text-[10px] z-10'>{name}</span>
      {children}
    </BiegeBlock>
  )
}

export default SidebarButton
