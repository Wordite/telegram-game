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
    <div onClick={clickHandler} className='open-scale w-[60px] h-[60px] mt-[12px] rounded-[12px] relative ml-auto origin-bottom cursor-pointer clickable shadow-[0px_4px_24px_rgba(20,0,48,0.64)]'>
        <img className='w-[60px] h-[60px] absolute -z-10' src={lampBg} alt="lamp bg" />
        <img className='w-[40px] h-[68px] absolute left-1/2 -translate-x-1/2 -translate-y-[15px]' src={lamp} alt="lamp" />
    </div>
  )
}

export default Lamp