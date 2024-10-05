import Background from '@assets/images/sidebar_menu_bg.svg'
import ArrowIcon from '@assets/icons/arrow_right.svg'
import ShopIcon from '@assets/icons/shop.svg'
import SpinIcon from '@assets/icons/spin.svg'
import StarsIcon from '@assets/icons/stars.svg'
import { useRef, useState } from 'react'
import BiegeBlock from '@shared/biegeBlock/biegeBlock'
import SidebarButton from '@components/sidebarButton/sidebarButton'

const SidebarMenu = () => {
  const [isActive, setIsActive] = useState(false)
  const sidebarButtonRef = useRef(null)

  const sidebarButtonClickHandler = () => {
    setIsActive((prevIsActive) => !prevIsActive)
  }

  return (
    <aside className='sidebar-menu w-[92px] h-[324px] absolute'>
      <BiegeBlock
        ref={sidebarButtonRef}
        onClick={sidebarButtonClickHandler}
        className='sidebar-menu-button open-scale border-[1.6px] border-black clickable clickable w-[44px] h-[42px] bg-biege rounded-[6px] flex items-center justify-center cursor-pointer mt-[12px] relative z-50'
      >
        <ArrowIcon
          className={`block w-[12px] h-[24px] ${isActive ? '-rotate-180' : ''} duration-300`}
        />
      </BiegeBlock>

      <div
        className={`absolute duration-300 top-0 ${
          isActive ? 'left-[0]' : 'left-[calc(-105%-32px)]'
        }`}
      >
        <Background className='absolute left-[-32px] top-0 -z-10' />
        <div className='mt-[76px] gap-[12px] flex flex-col'>
          <SidebarButton Icon={ShopIcon} name='Shop' />
          <SidebarButton Icon={SpinIcon} name='Daily Spin' />
          <SidebarButton Icon={StarsIcon} name='Rating' />
        </div>

        <p className='text-[10px] text-secondary text-center w-[55px] text mt-[8px] leading-[12px]'>
          100 TON prize pool
        </p>
      </div>
    </aside>
  )
}

export default SidebarMenu
