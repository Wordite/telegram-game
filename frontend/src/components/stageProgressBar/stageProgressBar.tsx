import { Triangle } from '@shared/triangle/triangle'

interface IStageProgressBarProps {
  progress: number
}

const StageProgressBar = ({ progress }: IStageProgressBarProps) => {
  return (
    <div className='h-[12px] border-[1.6px] border-black relative z-50 bg-brown shadow-[inset_0_8px_var(--color-brown-light)] rounded-[12px] rounded-t-[4px] overflow-hidden'>
      <div
        style={{ width: progress + '%' }}
        className='relative z-30 h-full rounded-[12px] duration-300 rounded-tl-[4px] bg-orange shadow-[inset_0_-1px_0_var(--color-orange-dark),inset_0_1px_0_var(--color-orange-light),1.2px_0_0_var(--color-black),1.2px_-0.4px_0_var(--color-black),1.2px_0.4px_0_var(--color-black)]'
      />
      <Triangle style={{ left: '10%', bottom: '0' }} className='absolute' />
      <Triangle style={{ left: '20%', bottom: '0' }} className='absolute' />
      <Triangle style={{ left: '30%', bottom: '0' }} className='absolute' />
      <Triangle style={{ left: '40%', bottom: '0' }} className='absolute' />
      <Triangle style={{ left: '50%', bottom: '0' }} className='absolute' />
      <Triangle style={{ left: '60%', bottom: '0' }} className='absolute' />
      <Triangle style={{ left: '70%', bottom: '0' }} className='absolute' />
      <Triangle style={{ left: '80%', bottom: '0' }} className='absolute' />
      <Triangle style={{ left: '90%', bottom: '0' }} className='absolute' />

      <Triangle style={{ left: '10%', top: '0' }} className='absolute rotate-180' />
      <Triangle style={{ left: '20%', top: '0' }} className='absolute rotate-180' />
      <Triangle style={{ left: '30%', top: '0' }} className='absolute rotate-180' />
      <Triangle style={{ left: '40%', top: '0' }} className='absolute rotate-180' />
      <Triangle style={{ left: '50%', top: '0' }} className='absolute rotate-180' />
      <Triangle style={{ left: '60%', top: '0' }} className='absolute rotate-180' />
      <Triangle style={{ left: '70%', top: '0' }} className='absolute rotate-180' />
      <Triangle style={{ left: '80%', top: '0' }} className='absolute rotate-180' />
      <Triangle style={{ left: '90%', top: '0' }} className='absolute rotate-180' />
    </div>
  )
}

export default StageProgressBar
