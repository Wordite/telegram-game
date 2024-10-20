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
        <div className='absolute left-[.125rem] top-[-1rem] -z-10 flex gap-[.5rem]'>
          <img className='w-[1.25rem] h-[1.25rem]' src={btl} alt='btl' />
          <div className={`flex items-center leading-[1em] translate-y-[-0.125rem] ${isPassed ? 'text-secondary' : ''}`}>
            <p className='text-[.75rem] text'>+</p>
            <p className='text-[1rem] text'>{reward}</p>
          </div>
        </div>
        {isPassed && (
          <BiegeBlock className='w-[1.5rem] h-[1.5rem] rounded-[50%] border-[.1rem] border-black bg-orange shadow-[inset_0_-0.4375rem_0_var(--color-orange-dark),inset_0_.125rem_0_var(--color-orange-light)]'>
            <img className='w-[.75rem] h-[.6875rem] pb-[.0625rem]' src={checkmark} alt='checkmark' />
          </BiegeBlock>
        )}

        {!isPassed && (
          <BiegeBlock className='w-[1.5rem] h-[1.5rem] rounded-[50%] border-[.1rem] border-black'>
            <p className='text-[.75rem] z-10 relative text pb-[.125rem]'>{step}</p>
          </BiegeBlock>
        )}

        <p className={`absolute left-1/2 -translate-x-1/2 text text-[.75rem] mt-[.125rem] ${isPassed ? 'text-secondary' : ''}`}>
            {condition}
        </p>
      </div>
    </>
  )
}

export default FriendsProgressBarPoint
