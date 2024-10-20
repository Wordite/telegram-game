import avatar from '@assets/images/profile.png'
import PurpleBlock from '@shared/purpleBlock/purpleBlock'
import btl from '@assets/icons/btl.png'

interface ITaskProps {
  name: string
  reward: number
}

const Task = ({ name, reward }: ITaskProps) => {
  const fontSize = name.length > 8 ? '1rem' : '1.5rem'


  return (
    <div className='flex justify-between'>
      <div className='flex items-center gap-[.75rem]'>
        <img className='w-[3rem] h-[3rem]' src={avatar} alt='' />
        <p className={`text relative z-10 text-[${fontSize}] leading-[1.25rem]`}>{name}</p>
      </div>

      <PurpleBlock isHaveGlitter={true} className='min-w-[6rem] h-[3rem] gap-[.3125rem] rounded-[.5rem] border-black border-[.1rem] clickable cursor-pointer'>
        <img className='w-[1.125rem] h-[1.125rem]' src={btl} alt='btl' />
        <p className='text relative z-10'>{reward}</p>
      </PurpleBlock>
    </div>
  )
}

export default Task
