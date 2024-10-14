import { Triangle } from '@shared/triangle/triangle'

interface IAirDropProgressBarProps {
  progress: number
}

const AirDropProgressBar = ({ progress }: IAirDropProgressBarProps) => {
  return (
    <div className='h-[24px] border-[1.6px] border-black relative z-50 bg-brown shadow-[inset_0_8px_var(--color-brown-light)] rounded-[12px] rounded-b-[4px] overflow-hidden'>
      <div
        style={{ width: progress + '%' }}
        className='relative z-30 h-full rounded-[12px] duration-300 rounded-bl-[2px] rounded-r-none bg-orange shadow-[inset_0_-7px_0_var(--color-orange-dark),inset_0_3px_0_var(--color-orange-light),1.2px_0_0_var(--color-black),1.2px_-0.4px_0_var(--color-black),1.2px_0.4px_0_var(--color-black)]'
      />
      <Triangle isBig={true} style={{ left: '10%', bottom: '0' }} className='absolute' />
      <Triangle isBig={true} style={{ left: '20%', bottom: '0' }} className='absolute' />
      <Triangle isBig={true} style={{ left: '30%', bottom: '0' }} className='absolute' />
      <Triangle isBig={true} style={{ left: '40%', bottom: '0' }} className='absolute' />
      <Triangle isBig={true} style={{ left: '50%', bottom: '0' }} className='absolute' />
      <Triangle isBig={true} style={{ left: '60%', bottom: '0' }} className='absolute' />
      <Triangle isBig={true} style={{ left: '70%', bottom: '0' }} className='absolute' />
      <Triangle isBig={true} style={{ left: '80%', bottom: '0' }} className='absolute' />
      <Triangle isBig={true} style={{ left: '90%', bottom: '0' }} className='absolute' />
    </div>
  )
}

export default AirDropProgressBar
