import FriendsProgressBarPoint from '@components/friendsProgressBarPoint/friendsProgressBarPoint'

interface IFriendsProgressBarProps {
  progress: number
}

const FriendsProgressBar = ({ progress }: IFriendsProgressBarProps) => {
return (
    <div className='h-[1rem] mt-[2.25rem] relative bg-brown shadow-[inset_0_.5rem_var(--color-brown-light)] border-black border-[.1rem] rounded-[.75rem] rounded-b-[.25rem]'>
      <div className='rounded-[.75rem] rounded-b-[.25rem] h-full overflow-hidden'>
        <div
          style={{ width: progress + '%' }}
          className='relative z-30 h-full rounded-[.75rem] rounded-bl-none bg-orange shadow-[inset_0_-0.375rem_0_var(--color-orange-dark),inset_0_.1875rem_0_var(--color-orange-light),.1rem_0_0_var(--color-black),.075rem_-0.025rem_0_var(--color-black),.075rem_.025rem_0_var(--color-black)]'
        />
      </div>

      <FriendsProgressBarPoint condition='' step={1} reward={10} isPassed={progress >= 5} className='left-[5%]' />
      <FriendsProgressBarPoint condition='100k' step={2} reward={35} isPassed={progress >= 32.5} className='left-[32.5%]' />
      <FriendsProgressBarPoint condition='200k' step={3} reward={50} isPassed={progress >= 55} className='left-[55%]' />
      <FriendsProgressBarPoint condition='1m' step={4} reward={90} isPassed={progress >= 77.5} className='left-[77.5%]' />
    </div>
  )
}

export default FriendsProgressBar
