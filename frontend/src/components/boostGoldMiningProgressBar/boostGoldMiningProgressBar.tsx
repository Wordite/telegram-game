import { Triangle } from '@shared/triangle/triangle'

interface IBoostGoldMiningProgressBarProps {
  progress: number
}

const BoostGoldMiningProgressBar = ({ progress }: IBoostGoldMiningProgressBarProps) => {
  return (
    <div className='h-[1.5rem] border-[.1rem] border-black relative z-50 bg-brown shadow-[inset_0_.5rem_var(--color-brown-light)] rounded-[.75rem] overflow-hidden'>
      <div
        style={{ width: progress + '%' }}
        className='relative z-30 h-full rounded-[.75rem] duration-300 rounded-bl-[.125rem] rounded-r-none bg-orange shadow-[inset_0_-0.4375rem_0_var(--color-orange-dark),inset_0_.1875rem_0_var(--color-orange-light),.075rem_0_0_var(--color-black),.075rem_-0.025rem_0_var(--color-black),.075rem_.025rem_0_var(--color-black)]'
      />

      <Triangle isBig={true} style={{ left: '17%', bottom: '0' }} className='absolute' />
      <Triangle isBig={true} style={{ left: '28%', bottom: '0' }} className='absolute' />
      <Triangle isBig={true} style={{ left: '39%', bottom: '0' }} className='absolute' />
      <Triangle isBig={true} style={{ left: '50%', bottom: '0' }} className='absolute' />
      <Triangle isBig={true} style={{ left: '61%', bottom: '0' }} className='absolute' />
      <Triangle isBig={true} style={{ left: '72%', bottom: '0' }} className='absolute' />
      <Triangle isBig={true} style={{ left: '83%', bottom: '0' }} className='absolute' />
      <Triangle isBig={true} style={{ left: '94%', bottom: '0' }} className='absolute' />
    </div>
  )
}

export default BoostGoldMiningProgressBar
