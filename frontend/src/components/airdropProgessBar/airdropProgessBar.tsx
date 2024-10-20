import { Triangle } from '@shared/triangle/triangle'

interface IAirDropProgressBarProps {
  progress: number
}

const AirDropProgressBar = ({ progress }: IAirDropProgressBarProps) => {
  return (
    <div className='h-[1.5rem] border-[.1rem] border-black relative z-50 bg-brown shadow-[inset_0_.5rem_var(--color-brown-light)] rounded-[.75rem] rounded-b-[.25rem] overflow-hidden'>
      <div
        style={{ width: progress + '%' }}
        className='relative z-30 h-full rounded-[.75rem] duration-300 rounded-bl-[.125rem] rounded-r-none bg-orange shadow-[inset_0_-0.4375rem_0_var(--color-orange-dark),inset_0_.1875rem_0_var(--color-orange-light),.075rem_0_0_var(--color-black),.075rem_-0.025rem_0_var(--color-black),.075rem_.025rem_0_var(--color-black)]'
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
