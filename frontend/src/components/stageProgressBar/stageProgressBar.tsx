import { Triangle } from '@shared/triangle/triangle'

interface IStageProgressBarProps {
  progress: number
}

const StageProgressBar = ({ progress }: IStageProgressBarProps) => {
  return (
    <div className='h-[24px] relative z-50 bg-brown shadow-[inset_0_8px_var(--color-brown-light)] border-black border-b-[1.6px] rounded-[12px] rounded-b-[4px] overflow-hidden'>
      <div
        style={{ width: progress + '%' }}
        className='relative z-30 h-full bg-orange rounded-l-[2px] rounded-tl-[9px] rounded-r-[12px] shadow-[inset_0_-8px_0_var(--color-orange-dark),inset_0_4px_0_var(--color-orange-light),1.6px_0_0_var(--color-black),1.2px_-0.4px_0_var(--color-black),1.2px_0.4px_0_var(--color-black)]'
      />
        <Triangle style={{ left: '17%', bottom: '0' }} className='absolute' />
        <Triangle style={{ left: '34%', bottom: '0' }} className='absolute' />
        <Triangle style={{ left: '51%', bottom: '0' }} className='absolute' />
        <Triangle style={{ left: '68%', bottom: '0' }} className='absolute' />
        <Triangle style={{ left: '85%', bottom: '0' }} className='absolute' />

        <Triangle style={{ left: '17%', top: '0' }} className='absolute rotate-180' />
        <Triangle style={{ left: '34%', top: '0' }} className='absolute rotate-180' />
        <Triangle style={{ left: '51%', top: '0' }} className='absolute rotate-180' />
        <Triangle style={{ left: '68%', top: '0' }} className='absolute rotate-180' />
        <Triangle style={{ left: '85%', top: '0' }} className='absolute rotate-180' />
    </div>
  )
}

export default StageProgressBar
