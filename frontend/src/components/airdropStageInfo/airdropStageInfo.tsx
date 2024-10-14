import airdrop from '@assets/icons/airdrop.png'
import AirDropProgressBar from '@components/airdropProgessBar/airdropProgessBar'
import BiegeBlockNeutral from '@shared/biegeBlockNeutral/biegeBlockNeutral'
import flask from '@assets/icons/flask.png'
import friends from '@assets/icons/friends.png'

const AirdropStageInfo = () => {
  return (
    <section className='open-scale h-[164px] bg-biege-gradient-horizontal rounded-[12px] shadow-[0_-2px_0_var(--color-biege-light-1)]'>
      <div className='h-[76px] flex items-center'>
        <div className='w-full flex justify-between items-center pl-[20px] pr-[12px]'>
          <div className='flex gap-[16px]'>
            <img className='w-[35px] h-[42px]' src={airdrop} alt='' />
            <div className='leading-[1em]'>
              <p className='text text-[24px] relative z-10'>1/10 Stage</p>
              <p className='text text-[12px] relative z-10 text-secondary mt-[4px]'>Telephone</p>
            </div>
          </div>

          <BiegeBlockNeutral className='w-[60px] h-[60px] rounded-[8px] border-black border-[1.6px] flex-col leading-[1em]'>
            <p className='text relative z-10 text-[26px]'>12</p>
            <p className='text relative z-10 text-[12px] text-secondary'>Goal</p>
          </BiegeBlockNeutral>
        </div>
      </div>

      <div className='airdrop-stage-progress h-[88px] bg-biege-gradient-horizontal rounded-[12px] shadow-[0_-2px_0_0_rgba(222,219,204,1),_inset_0_-8px_0_0_rgba(165,155,115,0.32)]'>
        <AirDropProgressBar progress={40} />

        <div className='h-[57px] pt-[8px] flex items-center'>
          <div className='w-1/2 flex gap-[6px] items-center h-full pl-[16px]'>
            <img className='w-[40px] h-[40px] mb-[3px]' src={flask} alt='flask' />
            <div className='flex items-end leading-[1em]'>
              <p className='text text-[24px] mb-[2px] relative z-10'>0</p>
              <p className='text text-secondary text-[16px] relative z-10'>/250K</p>
            </div>
          </div>

          <div className='w-1/2 pr-[39px] flex gap-[12px] items-center justify-end h-full'>
            <img className='w-[24px] h-[25px] mb-[3px]' src={friends} alt='flask' />
            <div className='flex items-end leading-[1em]'>
              <p className='text text-[24px] mb-[2px] relative z-10'>0</p>
              <p className='text text-secondary text-[16px] relative z-10'>/50 000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AirdropStageInfo
