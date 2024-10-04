import Background from '@assets/images/sidebar_menu_bg.svg'
import ArrowIcon from '@assets/icons/arrow_right.svg'
import ShopIcon from '@assets/icons/shop.svg'
import SpinIcon from '@assets/icons/spin.svg'
import StarsIcon from '@assets/icons/stars.svg'
import { useRef, useState } from 'react'
import { useAnimations } from '@hooks/useAnimations'

const SidebarMenu = () => {
  const [isActive, setIsActive] = useState(false)
  const { buttonClick } = useAnimations()
  const sidebarButtonRef = useRef(null)

  const sidebarButtonClickHandler = () => {
    setIsActive((prevIsActive) => !prevIsActive)
    buttonClick(sidebarButtonRef.current)
  }

  const shopClickHandler = (e) => {
    const el = e.currentTarget
    buttonClick(el)
  }

  return (
    <aside className='sidebar-menu w-[92px] h-[324px] absolute'>
      <button
        ref={sidebarButtonRef}
        onClick={sidebarButtonClickHandler}
        className='sidebar-menu-button w-[44px] h-[42px] bg-biege rounded-[6px] flex items-center justify-center cursor-pointer mt-[12px] relative z-50'
      >
        <ArrowIcon
          className={`block w-[12px] h-[24px] ${isActive ? '-rotate-180' : ''} duration-300`}
        />
      </button>

      <div
        className={`absolute duration-300 top-0 ${
          isActive ? 'left-[0]' : 'left-[calc(-105%-32px)]'
        }`}
      >
        <Background className='absolute left-[-32px] top-0 -z-10' />

        <div className='mt-[76px] gap-[12px] flex flex-col'>
          <button
            onClick={shopClickHandler}
            className='sidebar-menu-button w-[60px] h-[60px] bg-biege rounded-[6px] gap-[3px] flex items-center justify-center flex-col cursor-pointer border-[1.6px] border-black'
          >
            <ShopIcon className='w-[28px] h-[28px]' />
            <span className='text text-[10px] z-10'>Shop</span>
          </button>

          <button
            onClick={shopClickHandler}
            className='sidebar-menu-button w-[60px] h-[60px] bg-biege rounded-[6px] gap-[3px] flex items-center justify-center flex-col cursor-pointer border-[1.6px] border-black'
          >
            <SpinIcon className='w-[28px] h-[28px]' />
            <span className='text text-[10px] z-10'>Daily Spin</span>
          </button>

          <button
            onClick={shopClickHandler}
            className='sidebar-menu-button w-[60px] h-[60px] bg-biege rounded-[6px] gap-[3px] flex items-center justify-center flex-col cursor-pointer border-[1.6px] border-black'
          >
            <StarsIcon className='w-[28px] h-[28px]' />
            <span className='text text-[10px] z-10'>Rating</span>
          </button>
        </div>

        <p className='text-[10px] text-secondary text-center w-[55px] text mt-[8px] leading-[12px]'>
          100 TON prize pool
        </p>
      </div>
    </aside>
  )
}

export default SidebarMenu
