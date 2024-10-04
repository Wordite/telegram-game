import lamp from '@assets/images/lamp.png'
import { useAnimations } from '@hooks/useAnimations'

const Lamp = () => {
  const { buttonClick } = useAnimations()

  const clickHandler = (e) => {
    buttonClick(e.currentTarget)
  }

  return (
    <div onClick={clickHandler} className='pt-[246px] ml-auto origin-bottom cursor-pointer'>
        <img className='w-[60px] h-[78px]' src={lamp} alt="lamp" />
    </div>
  )
}

export default Lamp