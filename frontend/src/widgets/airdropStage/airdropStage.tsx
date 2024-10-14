import AirdropStageInfo from '@components/airdropStageInfo/airdropStageInfo'
import phone from '@assets/images/phone.png'
import OrangeBlock from '@shared/orangeBlock/orageBlock'
import PurpleBlock from '@shared/purpleBlock/purpleBlock'
import './airdropStage.css'


const AirdropStage = () => {
  return (
    <section className='h-full flex flex-col'>
      <AirdropStageInfo />

      <div className='open-scale mt-[24px] flex justify-center gap-[16px]'>
        <img className='w-[26px] h-[42px]' src={phone} alt='phone' />
        <div className='leading-[1em] flex flex-col justify-center'>
          <p className='text text-[20px]'>Why Durov needs it?</p>
          <p className='text text-[16px] text-secondary mt-[4px]'>a Mini - Story</p>
        </div>
      </div>

      <div className='open-scale mt-[12px] text-[16px] text-secondary flex items-center flex-col'>
        <p className='text'>Everyone can donate to Durov! Each closed</p>
        <p className='text'>
          goal brings us closer to an <span className='text-orange'>Airdrop</span>. When we
        </p>
        <p className='text'>finish all stages of donations - we will make</p>
        <p className='text'>an airdrop to Every Player! We will also send</p>
        <div className='flex'>
          <p className='text'>
            <span className='text-orange'>5%</span> of coins to Durov
          </p>
          '<p className='text'>s TON-wallet</p>
        </div>
      </div>

      <div className='open-scale mt-auto text-[18px]'>
        <OrangeBlock className='h-[52px] rounded-[8px] clickable cursor-pointer border-black border-[1.6px]'>
          <p className='text relative z-10'>Donate</p>
        </OrangeBlock>
        <PurpleBlock isHaveGlitter={true} className='h-[52px] rounded-[8px] mt-[16px] clickable cursor-pointer border-black border-[1.6px]'>
          <p className='text relative z-10'>Connect Wallet for Airdrop</p>
        </PurpleBlock>
      </div>
    </section>
  )
}

export default AirdropStage
