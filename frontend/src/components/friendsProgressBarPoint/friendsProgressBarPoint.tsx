import BiegeBlock from '@shared/biegeBlock/biegeBlock'
import btl from '@assets/icons/btl.png'
import checkmark from '@assets/icons/checkmark.png'


interface IFriendsProgressBarPointProps {
    step: number
    reward: number
    className?: string
    isPassed?: boolean
    condition: string
}


const FriendsProgressBarPoint = ({ step, reward, className = '', isPassed = false, condition }: IFriendsProgressBarPointProps) => {
  return (
    <>
      <div className={'absolute z-50 top-[-50%] ' + className}>
        <div className='absolute left-[2px] top-[-16px] -z-10 flex gap-[8px]'>
          <img className='w-[20px] h-[20px]' src={btl} alt='btl' />
          <div className={`flex items-center leading-[1em] translate-y-[-2px] ${isPassed ? 'text-secondary' : ''}`}>
            <p className='text-[12px] text'>+</p>
            <p className='text-[16px] text'>{reward}</p>
          </div>
        </div>
        {isPassed && (
          <BiegeBlock className='w-[24px] h-[24px] rounded-[50%] border-[1.6px] border-black bg-orange shadow-[inset_0_-7px_0_var(--color-orange-dark),inset_0_2px_0_var(--color-orange-light)]'>
            <img className='w-[12px] h-[11px] pb-[1px]' src={checkmark} alt='checkmark' />
          </BiegeBlock>
        )}

        {!isPassed && (
          <BiegeBlock className='w-[24px] h-[24px] rounded-[50%] border-[1.6px] border-black'>
            <p className='text-[12px] z-10 relative text pb-[2px]'>{step}</p>
          </BiegeBlock>
        )}

        <p className={`absolute left-1/2 -translate-x-1/2 text text-[12px] mt-[2px] ${isPassed ? 'text-secondary' : ''}`}>
            {condition}
        </p>
      </div>
    </>
  )
}

export default FriendsProgressBarPoint
