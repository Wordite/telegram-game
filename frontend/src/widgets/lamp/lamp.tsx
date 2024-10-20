import lamp from '@assets/images/lamp.png'
import lampBg from '@assets/images/lamp_bg.png'
import { usePopup } from '@hooks/usePopup'
import { Popups } from '@app/types/popups'

const Lamp = () => {
  const { openPopup } = usePopup(Popups.BoostGoldMining)

  const clickHandler = () => {
    openPopup()
  }

  return (
    <div onClick={clickHandler} className='open-scale w-[3.75rem] h-[3.75rem] mt-[.75rem] rounded-[.75rem] relative ml-auto origin-bottom cursor-pointer clickable shadow-[0rem_.25rem_1.5rem_rgba(20,0,48,0.64)]'>
        <img className='w-[3.75rem] h-[3.75rem] absolute -z-10' src={lampBg} alt="lamp bg" />
        <img className='w-[2.5rem] h-[4.25rem] absolute left-1/2 -translate-x-1/2 -translate-y-[.9375rem]' src={lamp} alt="lamp" />
    </div>
  )
}

export default Lamp