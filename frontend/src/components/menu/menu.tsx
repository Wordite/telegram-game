import BiegeBlock from '@shared/biegeBlock/biegeBlock'
import { useState } from 'react'
import './menu.css'

const Menu = () => {
  const [clicked, setClicked] = useState(false)

  const clickHandler = (e) => {
    const el = e.currentTarget as HTMLDivElement
    el.classList.toggle('clicked')

    if (el.classList.contains('clicked')) setClicked(true)
    else setClicked(false)
  }

  return (
    <BiegeBlock
      onClick={clickHandler}
      className='clickable w-[44px] h-[42px] ml-auto rounded-[6px] border-[1.6px] border-black menu flex-col cursor-pointer'
    >
      <span className='block w-[21px] h-[5px] bg-blue-light rounded-[2px] border-[1px] border-black burger' />
      <span className='block w-[21px] h-[5px] bg-blue-light rounded-[2px] border-[1px] border-black burger' />
      <span className='block w-[21px] h-[5px] bg-blue-light rounded-[2px] border-[1px] border-black burger' />
    </BiegeBlock>
  )
}

export default Menu
