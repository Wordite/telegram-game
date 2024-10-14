import OrangeBlock from '@shared/orangeBlock/orageBlock'
import btl from '@assets/icons/btl.png'
import copy from '@assets/icons/copy.png'
import BiegeBlock from '@shared/biegeBlock/biegeBlock'

const InviteFriends = () => {
  return (
    <div className='open-scale h-[52px] mt-[24px] flex gap-[8%]'>
      <OrangeBlock isHaveGlitter={true} className='w-[calc(100%-68px)] h-full rounded-[12px] border-black border-[1.6px] cursor-pointer clickable'>
        <div className='relative mb-[13px]'>
            <img className='w-[34px] h-[34px]' src={btl} alt="btl" />
            <div className='flex items-center absolute right-[-11px] bottom-[-11px]'>
                <p className='text text-[12px] relative z-10'>+</p>
                <p className='text text-[16px] relative z-10'>340</p>
            </div>
        </div>
        <p className='text text-[18px] relative z-10 ml-[27px] mb-[3px]'>Invite Friend</p>
      </OrangeBlock>

      <BiegeBlock className='w-[52px] h-full rounded-[12px] border-black border-[1.6px] cursor-pointer clickable'>
        <img className='w-[24px] h-[24px]' src={copy} alt="copy" />
      </BiegeBlock>
    </div>
  )
}

export default InviteFriends
