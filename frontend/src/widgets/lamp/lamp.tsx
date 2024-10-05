import lamp from '@assets/images/lamp.png'

const Lamp = () => {

  const clickHandler = (e) => {

  }

  return (
    <div onClick={clickHandler} className='open-scale mt-[246px] ml-auto origin-bottom cursor-pointer clickable'>
        <img className='w-[60px] h-[78px]' src={lamp} alt="lamp" />
    </div>
  )
}

export default Lamp