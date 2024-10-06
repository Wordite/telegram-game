

interface IProgressBarProps {
    progress: number
  }


const ProgressBar = ({ progress }: IProgressBarProps) => {
  return (
    <div className='h-[16px] relative z-50 bg-brown shadow-[inset_0_8px_var(--color-brown-light)] border-black border-b-[1.6px] rounded-[12px] rounded-b-[4px] overflow-hidden'>
      <div
        style={{ width: progress + '%' }}
        className='relative z-30 h-full bg-orange rounded-l-[2px] rounded-[9px] shadow-[inset_0_-8px_0_var(--color-orange-dark),inset_0_4px_0_var(--color-orange-light),1.6px_0_0_var(--color-black),1.2px_-0.4px_0_var(--color-black),1.2px_0.4px_0_var(--color-black)]'
      />
    </div>
  )
}

export default ProgressBar
