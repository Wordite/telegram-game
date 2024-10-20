import BiegeBlockNeutral from '@shared/biegeBlockNeutral/biegeBlockNeutral'
import PurpleBlock from '@shared/purpleBlock/purpleBlock'
import star from '@assets/icons/star_white.png'
import OrangeBlock from '@shared/orangeBlock/orageBlock'

const BuyGoldMiningBoosts = () => {
  return (
    <div className='flex gap-[.5rem] justify-center mt-[1rem]'>
      <BiegeBlockNeutral className='flex-col w-[5rem] h-[4.6875rem] rounded-[.5rem] border-black border-[.1rem] text-[1rem] clickable cursor-pointer'>
        <p className='text relative z-10'>15 min</p>
        <div className='bg-[#B1AA8D] rounded-[6.25rem] px-[.5rem] py-[.25rem] mt-[.1875rem]'>
          <p className='text relative z-10'>free</p>
        </div>
      </BiegeBlockNeutral>

      <PurpleBlock isEven={true} className='flex-col w-[5rem] h-[4.6875rem] rounded-[.5rem] border-black border-[.1rem] text-[1rem] clickable cursor-pointer'>
        <p className='text relative z-10'>90 min</p>
        <div className='bg-[#BD72F6] rounded-[6.25rem] px-[.5rem] py-[.25rem] mt-[.1875rem] flex items-center gap-[.25rem]'>
          <img className='w-[1rem] h-[1rem] mt-[.0625rem]' src={star} alt='star' />
          <p className='text relative z-10'>50</p>
        </div>
      </PurpleBlock>

      <OrangeBlock isEven={true} className='flex-col w-[5rem] h-[4.6875rem] rounded-[.5rem] border-black border-[.1rem] text-[1rem] clickable cursor-pointer'>
        <p className='text relative z-10'>250 min</p>
        <div className='bg-[#F55D1C] rounded-[6.25rem] px-[.5rem] py-[.25rem] mt-[.1875rem] flex items-center gap-[.25rem]'>
          <img className='w-[1rem] h-[1rem] mt-[.0625rem]' src={star} alt='star' />
          <p className='text relative z-10'>125</p>
        </div>
      </OrangeBlock>
    </div>
  )
}

export default BuyGoldMiningBoosts
