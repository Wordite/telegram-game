import Boosts from '@components/boosts/boosts'
import Coins from '@components/coins/coins'
import Menu from '@components/menu/menu'
import arrowRight from '@assets/icons/arrow_right.png'
import BiegeBlock from '@shared/biegeBlock/biegeBlock'
import { useSidebarSection } from '@hooks/useSidebarSection'
import { useSelector } from 'react-redux'
import { selectSection } from '@app/store/slices/sidebar'
import './topMenu.css'
import { SidebarSections } from '@app/types/sidebarSections'

const TopMenu = () => {
  const { closeSection } = useSidebarSection()
  const sidebarSection = useSelector(selectSection)
  const isSpin = sidebarSection === SidebarSections.DailySpin

  const clickHandler = () => {
    closeSection()
  }

  return (
    <header className={`${sidebarSection ? 'section-opened' : ''} ${isSpin ? 'spin-opened' : ''} top-menu left-0 top-0 w-full h-[96px] px-[20px] py-[14px] pb-[40px] flex relative z-[20000]`}>
      <BiegeBlock
        onClick={clickHandler}
        className={`section-close-button border-[1.6px] flex ${sidebarSection ? 'active' : ''} border-black clickable w-[44px] h-[42px] bg-biege rounded-[6px] items-center justify-center cursor-pointer relative z-50`}
      >
        <img
          src={arrowRight}
          className={`block w-[12px] h-[24px] rotate-180 translate-x-[-2px]  duration-300`}
        />
      </BiegeBlock>

      <Coins />
      <Boosts />
      <Menu />
    </header>
  )
}

export default TopMenu
