import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPage, setPage } from '@app/store/slices/page'
import './bottomNavigationButton.css'
import { useSidebarSection } from '@hooks/useSidebarSection'

interface IBottomNavigationButton {
  section: string
  iconWhite: any
  iconSecondary: any
  iconWidth: number
  iconHeight: number
  text: string
}

const BottomNavigationButton = ({ text, section, iconWhite, iconSecondary, iconHeight, iconWidth }: IBottomNavigationButton) => {
  const page = useSelector(selectPage)
  const isActive = page == section
  const linkRef = useRef(null)
  const dispatch = useDispatch()
  const { closeSection } = useSidebarSection()

  const clickHandler = () => {
    if (page == section) return
    dispatch(setPage(section))
    closeSection()
  }

  return (
    <div
      onClick={clickHandler}
      ref={linkRef}
      className={`bottom-link ${
        isActive ? 'active' : ''
      } relative cursor-pointer flex justify-center items-center flex-col gap-[2px] z-20 w-[60px] h-[60px] rounded-[8px] duration-300`}
    >
      <div></div>
      <img style={{ width: iconWidth + 'px', height: iconHeight + 'px' }} src={isActive ? iconWhite : iconSecondary} alt='icon' />
      <p className='text-[10px] text'>{text}</p>
    </div>
  )
}

export default BottomNavigationButton
