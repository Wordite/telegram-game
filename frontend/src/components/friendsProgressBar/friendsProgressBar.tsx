import FriendsProgressBarPoint from '@components/friendsProgressBarPoint/friendsProgressBarPoint'

interface IFriendsProgressBarProps {
  progress: number
}

const FriendsProgressBar = ({ progress }: IFriendsProgressBarProps) => {
  return (
    <div className='h-[16px] mt-[36px] relative bg-brown shadow-[inset_0_8px_var(--color-brown-light)] border-black border-[1.6px] rounded-[12px] rounded-b-[4px]'>
      <div className='rounded-[12px] rounded-b-[4px] h-full overflow-hidden'>
        <div
          style={{ width: progress + '%' }}
          className='relative z-30 h-full rounded-[12px] rounded-bl-none bg-orange shadow-[inset_0_-6px_0_var(--color-orange-dark),inset_0_3px_0_var(--color-orange-light),1.6px_0_0_var(--color-black),1.2px_-0.4px_0_var(--color-black),1.2px_0.4px_0_var(--color-black)]'
        />
      </div>

      <FriendsProgressBarPoint condition='' step={1} reward={10} isPassed={true} className='left-[5%]' />
      <FriendsProgressBarPoint condition='100k' step={2} reward={35} isPassed={true} className='left-[32.5%]' />
      <FriendsProgressBarPoint condition='200k' step={3} reward={50} className='left-[55%]' />
      <FriendsProgressBarPoint condition='1m' step={4} reward={90} className='left-[77.5%]' />
    </div>
  )
}

export default FriendsProgressBar
