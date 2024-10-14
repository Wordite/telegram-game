import avatar from '@assets/images/profile.png'
import PurpleBlock from '@shared/purpleBlock/purpleBlock'
import btl from '@assets/icons/btl.png'

interface ITaskProps {
  name: string
  reward: number
}

const Task = ({ name }: ITaskProps) => {
  const fontSize = name.length > 8 ? '16px' : '24px'

  return (
    <div className='flex justify-between'>
      <div className='flex items-center gap-[12px]'>
        <img className='w-[48px] h-[48px]' src={avatar} alt='' />
        <p className={`text relative z-10 text-[${fontSize}] leading-[20px]`}>{name}</p>
      </div>

      <PurpleBlock isHaveGlitter={true} className='min-w-[96px] h-[48px] gap-[5px] rounded-[8px] border-black border-[1.6px] clickable cursor-pointer'>
        <img className='w-[18px] h-[18px]' src={btl} alt='btl' />
        <p className='text relative z-10'>40</p>
      </PurpleBlock>
    </div>
  )
}

export default Task
