import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPage, setPage } from '@app/store/slices/page'
import './bottomNavigationButton.css'
import { useSidebarSection } from '@hooks/useSidebarSection'

interface IBottomNavigationButton {
  section: string
  iconWhite: any
  iconSecondary: any
  iconWidth: string
  iconHeight: string
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
      } relative cursor-pointer flex justify-center items-center flex-col gap-[.125rem] z-20 w-[3.75rem] h-[3.75rem] rounded-[.5rem] duration-300`}
    >
      <div></div>
      <img style={{ width: iconWidth, height: iconHeight }} src={isActive ? iconWhite : iconSecondary} alt='icon' />
      <p className='text-[.625rem] text'>{text}</p>
    </div>
  )
}

export default BottomNavigationButton
