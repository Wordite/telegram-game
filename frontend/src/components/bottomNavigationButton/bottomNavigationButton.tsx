import { Link } from "react-router-dom"
import { useAnimations } from "@hooks/useAnimations"
import './bottomNavigationButton.css'
import { useEffect, useRef } from "react"

interface IBottomNavigationButton {
  link?: string
  Icon?: any
  text: string
}


const BottomNavigationButton = ({ text, link, Icon }: IBottomNavigationButton) => {
  const isActive = window.location.pathname == link
  const { bottomNavigationPick } = useAnimations()
  const linkRef = useRef(null)

  useEffect(() => {
    if (isActive && linkRef.current) bottomNavigationPick(linkRef.current)
  }, [isActive])

  const clickHandler = (e) => {
    if (isActive) e.preventDefault()
  }

  return (
    <Link onClick={clickHandler} ref={linkRef} to={link} className={`bottom-link ${isActive ? 'active' : ''} relative flex justify-center items-center flex-col gap-[2px] z-20 w-[60px] h-[60px] rounded-[8px] duration-300`}>
        <div></div>
        <Icon className='w-[28px] h-[28px]' />
        <p className='text-[10px] text'>{text}</p>
    </Link>
  )
}

export default BottomNavigationButton