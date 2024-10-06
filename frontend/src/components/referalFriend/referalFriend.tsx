import profile from '@assets/images/profile.png'
import PurpleBlock from '@shared/purpleBlock/purpleBlock'
import btl from '@assets/icons/btl.png'
import FriendsProgressBar from '@components/friendsProgressBar/friendsProgressBar'

interface IReferalFriendProps {
  isCompleted: boolean
  progress: number
  earned: number
}

const ReferalFriend = ({ isCompleted, progress, earned }: IReferalFriendProps) => {
  isCompleted
  return (
    <div className='py-[16px]'>
      <div className='flex items-center px-[20px]'>
        <img className='w-[48px] h-[48px]' src={profile} alt='avatar' />
        <div className='flex flex-col justify-center leading-[1em] gap-[8px] ml-[12px]'>
          <p className='text-[24px] text'>Flocky</p>
          <p className='text-[12px] text'>
            <span className='text-secondary'>$BTL earned: </span>
            <span>{earned}</span>
          </p>
        </div>

        <PurpleBlock className='clickable cursor-pointer w-[96px] h-[48px] rounded-[8px] border-black border-[1.6px] ml-auto'>
          <img className='w-[22px] h-[22px]' src={btl} alt='btl' />
          <div className='relative z-10 flex items-center ml-[5px]'>
            <p className='text-[16px] text'>+</p>
            <p className='text-[20px] text'>35</p>
          </div>
        </PurpleBlock>
      </div>

      <FriendsProgressBar progress={progress} />
    </div>
  )
}

export default ReferalFriend
