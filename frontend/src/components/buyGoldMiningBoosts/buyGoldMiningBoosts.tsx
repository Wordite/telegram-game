import BiegeBlockNeutral from '@shared/biegeBlockNeutral/biegeBlockNeutral'
import PurpleBlock from '@shared/purpleBlock/purpleBlock'
import star from '@assets/icons/star_white.png'
import OrangeBlock from '@shared/orangeBlock/orageBlock'

const BuyGoldMiningBoosts = () => {
  return (
    <div className='flex gap-[8px] justify-center mt-[16px]'>
      <BiegeBlockNeutral className='flex-col w-[80px] h-[75px] rounded-[8px] border-black border-[1.6px] text-[16px] clickable cursor-pointer'>
        <p className='text relative z-10'>15 min</p>
        <div className='bg-[#B1AA8D] rounded-[100px] px-[8px] py-[4px] mt-[3px]'>
          <p className='text relative z-10'>free</p>
        </div>
      </BiegeBlockNeutral>

      <PurpleBlock isEven={true} className='flex-col w-[80px] h-[75px] rounded-[8px] border-black border-[1.6px] text-[16px] clickable cursor-pointer'>
        <p className='text relative z-10'>90 min</p>
        <div className='bg-[#BD72F6] rounded-[100px] px-[8px] py-[4px] mt-[3px] flex items-center gap-[4px]'>
          <img className='w-[16px] h-[16px] mt-[1px]' src={star} alt='star' />
          <p className='text relative z-10'>50</p>
        </div>
      </PurpleBlock>

      <OrangeBlock isEven={true} className='flex-col w-[80px] h-[75px] rounded-[8px] border-black border-[1.6px] text-[16px] clickable cursor-pointer'>
        <p className='text relative z-10'>250 min</p>
        <div className='bg-[#F55D1C] rounded-[100px] px-[8px] py-[4px] mt-[3px] flex items-center gap-[4px]'>
          <img className='w-[16px] h-[16px] mt-[1px]' src={star} alt='star' />
          <p className='text relative z-10'>125</p>
        </div>
      </OrangeBlock>
    </div>
  )
}

export default BuyGoldMiningBoosts
