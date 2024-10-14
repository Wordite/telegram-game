import { Triangle } from '@shared/triangle/triangle'

interface IBoostGoldMiningProgressBarProps {
  progress: number
}

const BoostGoldMiningProgressBar = ({ progress }: IBoostGoldMiningProgressBarProps) => {
  return (
    <div className='h-[24px] border-[1.6px] border-black relative z-50 bg-brown shadow-[inset_0_8px_var(--color-brown-light)] rounded-[12px] overflow-hidden'>
      <div
        style={{ width: progress + '%' }}
        className='relative z-30 h-full rounded-[12px] duration-300 rounded-bl-[2px] rounded-r-none bg-orange shadow-[inset_0_-7px_0_var(--color-orange-dark),inset_0_3px_0_var(--color-orange-light),1.2px_0_0_var(--color-black),1.2px_-0.4px_0_var(--color-black),1.2px_0.4px_0_var(--color-black)]'
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
