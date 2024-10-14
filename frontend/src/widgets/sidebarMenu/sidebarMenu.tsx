import Background from '@assets/images/sidebar_menu_bg.svg'
import arrowRight from '@assets/icons/arrow_right.png'
import shop from '@assets/icons/shop.png'
import spin from '@assets/icons/spin.png'
import stars from '@assets/icons/stars.png'

import { useState } from 'react'
import BiegeBlock from '@shared/biegeBlock/biegeBlock'
import SidebarButton from '@components/sidebarButton/sidebarButton'
import { SidebarSections } from '@app/types/sidebarSections'
import './sidebarMenu.css'

const SidebarMenu = () => {
  const [isActive, setIsActive] = useState(false)

  const sidebarButtonClickHandler = () => {
    setIsActive((prevIsActive) => !prevIsActive)
  }

  return (
    <aside className='sidebar-menu w-[92px] h-[324px] absolute'>
      <BiegeBlock
        onClick={sidebarButtonClickHandler}
        className='sidebar-menu-button open-scale border-[1.6px] border-black clickable clickable w-[44px] h-[42px] bg-biege rounded-[6px] flex items-center justify-center cursor-pointer mt-[12px] relative z-50'
      >
        <img
          src={arrowRight}
          className={`block w-[12px] h-[24px] ${isActive ? '-rotate-180' : ''} duration-300`}
        />
      </BiegeBlock>

      <div
        className={`absolute duration-300 top-0 ${
          isActive ? 'left-[0]' : 'left-[calc(-105%-32px)]'
        }`}
      >
        <Background className='absolute left-[-32px] top-0 -z-10' />
        <div className='mt-[76px] gap-[12px] flex flex-col relative z-30'>
          <SidebarButton iconWidth={28} iconHeight={29} icon={shop} name='Shop' section={SidebarSections.Shop} />
          <SidebarButton iconWidth={28} iconHeight={29} icon={spin} name='Daily Spin' section={SidebarSections.DailySpin} />
          <SidebarButton iconWidth={36} iconHeight={29} icon={stars} name='Rating' section={SidebarSections.Rating} />
        </div>

        <div className='mt-[8px] relative'>
          <div className='ton-prize-pool bg-biege-neutral w-[56.8px] h-[56.8px] shadow-[inset_0px_-4px_0px_rgba(165,155,115,0.64)] rounded-[8px] absolute left-[1.6px] top-[-33px] border-transparent border-[1.6px]'></div>
          <p className='text-[10px] text-secondary text-center w-[55px] text leading-[12px] ml-[2px] -translate-y-[4px]'>
            100 TON prize pool
          </p>
        </div>
      </div>
    </aside>
  )
}

export default SidebarMenu
