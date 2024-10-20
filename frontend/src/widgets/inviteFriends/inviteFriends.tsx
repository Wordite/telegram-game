import OrangeBlock from '@shared/orangeBlock/orageBlock'
import btl from '@assets/icons/btl.png'
import copy from '@assets/icons/copy.png'
import BiegeBlock from '@shared/biegeBlock/biegeBlock'

const InviteFriends = () => {
  return (
    <div className='open-scale h-[3.25rem] mt-[1.5rem] flex gap-[8%]'>
      <OrangeBlock isHaveGlitter={true} className='w-[calc(100%-4.25rem)] h-full rounded-[.75rem] border-black border-[.1rem] cursor-pointer clickable'>
        <div className='relative mb-[.8125rem]'>
            <img className='w-[2.125rem] h-[2.125rem]' src={btl} alt="btl" />
            <div className='flex items-center absolute right-[-0.6875rem] bottom-[-0.6875rem]'>
                <p className='text text-[.75rem] relative z-10'>+</p>
                <p className='text text-[1rem] relative z-10'>340</p>
            </div>
        </div>
        <p className='text text-[1.125rem] relative z-10 ml-[1.6875rem] mb-[.1875rem]'>Invite Friend</p>
      </OrangeBlock>

      <BiegeBlock className='w-[3.25rem] h-full rounded-[.75rem] border-black border-[.1rem] cursor-pointer clickable'>
        <img className='w-[1.5rem] h-[1.5rem]' src={copy} alt="copy" />
      </BiegeBlock>
    </div>
  )
}

export default InviteFriends
