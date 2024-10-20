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
    <aside className='sidebar-menu w-[5.75rem] h-[20.25rem] absolute'>
      <BiegeBlock
        onClick={sidebarButtonClickHandler}
        className='sidebar-menu-button open-scale border-[.1rem] border-black clickable clickable w-[2.75rem] h-[2.625rem] bg-biege rounded-[.375rem] flex items-center justify-center cursor-pointer mt-[.75rem] relative z-50'
      >
        <img
          src={arrowRight}
          className={`block w-[.75rem] h-[1.5rem] ${isActive ? '-rotate-180' : ''} duration-300`}
        />
      </BiegeBlock>

      <div
        className={`absolute duration-300 top-0 ${
          isActive ? 'left-[0]' : 'left-[calc(-105%-2rem)]'
        }`}
      >
        <Background className='w-[6.5rem] h-[20.5rem] absolute left-[-2rem] top-0 -z-10' />
        <div className='mt-[4.75rem] gap-[.75rem] flex flex-col relative z-30'>
          <SidebarButton
            iconWidth='1.75rem'
            iconHeight='1.8125rem'
            icon={shop}
            name='Shop'
            section={SidebarSections.Shop}
          />
          <SidebarButton
            iconWidth='1.75rem'
            iconHeight='1.8125rem'
            icon={spin}
            name='Daily Spin'
            section={SidebarSections.DailySpin}
          />
          <SidebarButton
            iconWidth='2.25rem'
            iconHeight='1.8125rem'
            icon={stars}
            name='Rating'
            section={SidebarSections.Rating}
          />
        </div>

        <div className='mt-[.5rem] relative'>
          <div className='ton-prize-pool bg-biege-neutral w-[3.55rem] h-[3.55rem] shadow-[inset_0rem_-0.25rem_0rem_rgba(165,155,115,0.64)] rounded-[.5rem] absolute left-[.1rem] top-[-2.0625rem] border-transparent border-[.1rem]'></div>
          <p className='text-[.625rem] text-secondary text-center w-[3.4375rem] text leading-[.75rem] ml-[.125rem] -translate-y-[.25rem]'>
            100 TON prize pool
          </p>
        </div>
      </div>
    </aside>
  )
}

export default SidebarMenu
