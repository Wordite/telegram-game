import airdrop from '@assets/icons/airdrop.png'
import AirDropProgressBar from '@components/airdropProgessBar/airdropProgessBar'
import BiegeBlockNeutral from '@shared/biegeBlockNeutral/biegeBlockNeutral'
import flask from '@assets/images/flask.png'
import friends from '@assets/icons/friends.png'

const AirdropStageInfo = () => {
  return (
    <section className='open-scale h-[10.25rem] bg-biege-gradient-horizontal rounded-[.75rem] shadow-[0_-0.125rem_0_var(--color-biege-light-1)]'>
      <div className='h-[4.75rem] flex items-center'>
        <div className='w-full flex justify-between items-center pl-[1.25rem] pr-[.75rem]'>
          <div className='flex gap-[1rem]'>
            <img className='w-[2.1875rem] h-[2.625rem]' src={airdrop} alt='' />
            <div className='leading-[1em]'>
              <p className='text text-[1.5rem] relative z-10'>1/10 Stage</p>
              <p className='text text-[.75rem] relative z-10 text-secondary mt-[.25rem]'>Telephone</p>
            </div>
          </div>

          <BiegeBlockNeutral className='w-[3.75rem] h-[3.75rem] rounded-[.5rem] border-black border-[.1rem] flex-col leading-[1em]'>
            <p className='text relative z-10 text-[1.625rem]'>12</p>
            <p className='text relative z-10 text-[.75rem] text-secondary mt-[.25rem]'>Goal</p>
          </BiegeBlockNeutral>
        </div>
      </div>

      <div className='airdrop-stage-progress h-[5.5rem] bg-biege-gradient-horizontal rounded-[.75rem] shadow-[0_-0.125rem_0_0_rgba(222,219,204,1),_inset_0_-0.5rem_0_0_rgba(165,155,115,0.32)]'>
        <AirDropProgressBar progress={40} />

        <div className='h-[3.5625rem] pt-[.5rem] flex items-center'>
          <div className='w-1/2 flex gap-[.375rem] items-center h-full pl-[1rem]'>
            <img className='w-[2.5rem] h-[2.5rem] mb-[.1875rem]' src={flask} alt='flask' />
            <div className='flex items-end leading-[1em]'>
              <p className='text text-[1.5rem] mb-[.125rem] relative z-10'>0</p>
              <p className='text text-secondary text-[1rem] relative z-10'>/250K</p>
            </div>
          </div>

          <div className='w-1/2 pr-[2.4375rem] flex gap-[.75rem] items-center justify-end h-full'>
            <img className='w-[1.5rem] h-[1.5625rem] mb-[.1875rem]' src={friends} alt='flask' />
            <div className='flex items-end leading-[1em]'>
              <p className='text text-[1.5rem] mb-[.125rem] relative z-10'>0</p>
              <p className='text text-secondary text-[1rem] relative z-10'>/50 000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AirdropStageInfo
