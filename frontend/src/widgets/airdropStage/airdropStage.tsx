import AirdropStageInfo from '@components/airdropStageInfo/airdropStageInfo'
import phone from '@assets/images/phone.png'
import OrangeBlock from '@shared/orangeBlock/orageBlock'
import PurpleBlock from '@shared/purpleBlock/purpleBlock'
import './airdropStage.css'


const AirdropStage = () => {
  return (
    <section className='h-full flex flex-col'>
      <AirdropStageInfo />

      <div className='open-scale mt-[1.5rem] flex justify-center gap-[1rem]'>
        <img className='w-[1.625rem] h-[2.625rem]' src={phone} alt='phone' />
        <div className='leading-[1em] flex flex-col justify-center'>
          <p className='text text-[1.25rem]'>Why Durov needs it?</p>
          <p className='text text-[1rem] text-secondary mt-[.25rem]'>a Mini - Story</p>
        </div>
      </div>

      <div className='open-scale mt-[.75rem] text-[1rem] text-secondary flex items-center flex-col'>
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

      <div className='open-scale mt-auto text-[1.125rem]'>
        <OrangeBlock className='h-[3.25rem] rounded-[.5rem] clickable cursor-pointer border-black border-[.1rem]'>
          <p className='text relative z-10'>Donate</p>
        </OrangeBlock>
        <PurpleBlock isHaveGlitter={true} className='h-[3.25rem] rounded-[.5rem] mt-[1rem] clickable cursor-pointer border-black border-[.1rem]'>
          <p className='text relative z-10'>Connect Wallet for Airdrop</p>
        </PurpleBlock>
      </div>
    </section>
  )
}

export default AirdropStage
