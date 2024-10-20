import profile from '@assets/images/profile.png'
import PurpleBlock from '@shared/purpleBlock/purpleBlock'
import btl from '@assets/icons/btl.png'
import FriendsProgressBar from '@components/friendsProgressBar/friendsProgressBar'
import { useRef, useState } from 'react'
import { useAnimations } from '@hooks/useAnimations'

interface IReferalFriendProps {
  isCompleted: boolean
  progress: number
  earned: number
  isHaveReward: boolean
}

const ReferalFriend = ({ isCompleted, progress, earned, isHaveReward }: IReferalFriendProps) => {
  const [isTaken, setIsTaken] = useState(false)
  const { openScale } = useAnimations()
  const noRewardTextRef = useRef(null)

  const handleTakeRewardClick = () => {
    if (isTaken || isCompleted) return

    setIsTaken(true)
    setTimeout(() => openScale(noRewardTextRef.current), 0)
  }

  return (
    <div className='py-[1rem]'>
      <div className='flex items-center px-[1.25rem]'>
        <img className='w-[3rem] h-[3rem]' src={profile} alt='avatar' />
        <div className='flex flex-col justify-center leading-[1em] gap-[.5rem] ml-[.75rem]'>
          <p className='text-[1.5rem] text'>Flocky</p>
          <p className='text-[.75rem] text'>
            <span className='text-secondary'>$BTL earned: </span>
            <span>{earned}</span>
          </p>
        </div>

        {isHaveReward && !isTaken && !isCompleted ? (
          <PurpleBlock
            onClick={handleTakeRewardClick}
            isHaveGlitter={true}
            className='clickable cursor-pointer w-[6rem] h-[3rem] rounded-[.5rem] border-black border-[.1rem] ml-auto'
          >
            <img className='w-[1.375rem] h-[1.375rem]' src={btl} alt='btl' />
            <div className='relative z-10 flex items-center ml-[.3125rem]'>
              <p className='text-[1rem] text'>+</p>
              <p className='text-[1.25rem] text'>35</p>
            </div>
          </PurpleBlock>
        ) : (
          <div className='clickable cursor-pointer w-[6rem] h-[3rem] flex items-center justify-center shadow-[inset_0_.25rem_0_rgba(241,237,216,0.64),inset_0_-0.25rem_0_rgba(165,155,115,0.64)] bg-biege-neutral rounded-[.5rem] border-black border-[.1rem] ml-auto'>
            <div className='relative z-10 flex items-center justify-center ml-[.3125rem]'>
              <p ref={noRewardTextRef} className='text-[.75rem] text text-secondary'>No reward</p>
            </div>
          </div>
        )}
      </div>

      <FriendsProgressBar progress={progress} />
    </div>
  )
}

export default ReferalFriend
