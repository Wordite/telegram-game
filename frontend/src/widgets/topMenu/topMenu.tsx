import Boosts from '@components/boosts/boosts'
import Coins from '@components/coins/coins'
import Menu from '@components/menu/menu'
import arrowRight from '@assets/icons/arrow_right.png'
import BiegeBlock from '@shared/biegeBlock/biegeBlock'
import { useSidebarSection } from '@hooks/useSidebarSection'
import { useSelector } from 'react-redux'
import { selectSection } from '@app/store/slices/sidebar'
import { SidebarSections } from '@app/types/sidebarSections'
import './topMenu.css'
import Btl from '@components/btl/btl'
import { selectPage } from '@app/store/slices/page'

const TopMenu = () => {
  const { closeSection } = useSidebarSection()
  const sidebarSection = useSelector(selectSection)
  const isSpin = sidebarSection === SidebarSections.DailySpin
  const page = useSelector(selectPage)

  const clickHandler = () => {
    closeSection()
  }

  return (
    <header className={`${sidebarSection ? 'section-opened' : ''} ${page === 'game' ? 'game-page' : ''} ${isSpin ? 'spin-opened' : ''} top-menu left-0 top-0 w-full h-[4.375rem] px-[1.9375rem] py-[.875rem] mb-[2.5rem] flex relative z-[25000]`}>
      <BiegeBlock
        onClick={clickHandler}
        className={`section-close-button border-[.1rem] flex ${sidebarSection ? 'active' : ''} border-black clickable w-[2.75rem] h-[2.625rem] bg-biege rounded-[.375rem] items-center justify-center cursor-pointer relative z-50`}
      >
        <img
          src={arrowRight}
          className={`block w-[.75rem] h-[1.5rem] rotate-180 translate-x-[-0.125rem]  duration-300`}
        />
      </BiegeBlock>

      <Coins />
      <Boosts />
      <Btl />
      {/* <Menu /> */}
    </header>
  )
}

export default TopMenu
