import BiegeBlock from '@shared/biegeBlock/biegeBlock'
import { PropsWithChildren } from 'react'

interface ISidebarButtonProps extends PropsWithChildren {
    Icon: any
    name: string
}

const SidebarButton = ({ Icon, name, children }: ISidebarButtonProps) => {
  return (
    <BiegeBlock
      className='sidebar-menu-button clickable w-[60px] h-[60px] bg-biege rounded-[6px] gap-[3px] flex items-center justify-center flex-col cursor-pointer border-[1.6px] border-black'
    >
      <Icon className='w-[28px] h-[28px]' />
      <span className='text text-[10px] z-10'>{name}</span>
      {children}
    </BiegeBlock>
  )
}

export default SidebarButton
