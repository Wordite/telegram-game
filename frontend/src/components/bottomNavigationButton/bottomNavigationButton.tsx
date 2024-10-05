import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectPage, setPage } from '@app/store/slices/page'
import './bottomNavigationButton.css'

interface IBottomNavigationButton {
  section: string
  Icon: any
  text: string
}

const BottomNavigationButton = ({ text, section, Icon }: IBottomNavigationButton) => {
  const page = useSelector(selectPage)
  const isActive = page == section
  const linkRef = useRef(null)
  const dispatch = useDispatch()

  const clickHandler = () => {
    if (page == section) return
    dispatch(setPage(section))
  }

  return (
    <div
      onClick={clickHandler}
      ref={linkRef}
      className={`bottom-link ${
        isActive ? 'active' : ''
      } relative flex justify-center items-center flex-col gap-[2px] z-20 w-[60px] h-[60px] rounded-[8px] duration-300`}
    >
      <div></div>
      <Icon className='w-[28px] h-[28px]' />
      <p className='text-[10px] text'>{text}</p>
    </div>
  )
}

export default BottomNavigationButton
