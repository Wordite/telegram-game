import flask from '@assets/icons/flask.png'
import plusPurple from '@assets/icons/plus_purple.png'
import arrowUp from '@assets/icons/arrow_up.png'

const Boosts = () => {
  return (
    <div className='flex items-center relative w-[116px] ml-[33px]'>
      <img className='w-[36px] h-[36px] z-10 absolute left-[-5px] -translate-y-[3px] -translate-x-[3px]' src={flask} alt='coin' />
      <div className='w-[116px] h-[24px] pb-[2px] flex justify-center items-center bg-[rgba(215,213,204,1)] shadow-[inset_0_-8px_0_0_#BAB7AA] rounded-[12px] border-[1.2px] border-black'>
        <div className='text-[14px] relative'>
          <p className='text z-10 block'>1290</p>
          <div className='absolute bottom-[-20px] left-1/2 -translate-x-1/2 flex text-[10px] items-center leading-[1em]'>
            <p className='text-secondary'>Income</p>
            <p className='text-purple-icon ml-[3px]'>4%</p>
            <img className='w-[9px] h-[11px] ml-[4px] translate-y-[-2px]' src={arrowUp} alt="arrow" />
          </div>
        </div>
      </div>
      <img className='w-[28px] h-[30px] absolute right-[-8px] clickable cursor-pointer' src={plusPurple} alt='plus' />
    </div>
  )
}

export default Boosts
