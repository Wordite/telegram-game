import menu from '@assets/icons/menu.png'
import { useAnimations } from '@hooks/useAnimations'
import ShadowBlock from '@shared/shadowBlock/shadowBlock'
import { useRef, useState } from 'react'

const Menu = () => {
  const [clicked, setClicked] = useState(false)
  const { buttonClick } = useAnimations()

  const clickHandler = (e) => {
    const el = e.currentTarget as HTMLDivElement
    el.classList.toggle('clicked')

    buttonClick(el)

    if (el.classList.contains('clicked')) setClicked(true)
    else setClicked(false)
  }

  return (
    <div
      onClick={clickHandler}
      className='w-[44px] h-[42px] bg-biege rounded-[6px] border-[1.6px] border-black menu flex justify-center items-center flex-col cursor-pointer'
    >
      <span className='block w-[21px] h-[5px] bg-blue-light rounded-[2px] border-[1px] border-black burger' />
      <span className='block w-[21px] h-[5px] bg-blue-light rounded-[2px] border-[1px] border-black burger' />
      <span className='block w-[21px] h-[5px] bg-blue-light rounded-[2px] border-[1px] border-black burger' />
    </div>
  )
}

export default Menu
