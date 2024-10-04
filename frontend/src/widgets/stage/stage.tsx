import flask from '@assets/icons/flask.png'
import StageProgressBar from '@components/stageProgressBar/stageProgressBar'
import { Triangle } from '@shared/triangle/triangle'

const Stage = () => {
  return (
    <section className='stage relative w-full h-[152px] z-20 mt-auto bg-gradient-to-t from-[#C6C4BA] to-[#D7D5CC] rounded-[12px]'>
      <div className='stage-bg' />

      <div className='h-[77px] flex items-center gap-[16px] px-[12px]'>
        <div className='stage-counter w-[60px] h-[60px] rounded-[8px] border-[1.6px] border-black flex items-center justify-center flex-col bg-biege-neutral'>
          <p className='text-[26px] text leading-[1em] relative z-10'>1.4</p>
          <p className='text text-[12px] text-secondary relative z-10'>Stage</p>
        </div>

        <div className='flex gap-[12px] items-center'>
          <img className='w-[48px] h-[48px]' src={flask} alt='flask' />

          <div className='pt-[4px] leading-[1em]'>
            <div className='flex items-center'>
              <p className='text-[20px] text'>+</p>
              <p className='text-[24px] text'>560</p>
            </div>

            <p className='text-[12px] text text-secondary mt-[8px]'>Improvement Reward</p>
          </div>
        </div>
      </div>

      <div className='h-[76px] border-black border-[1.6px] rounded-[12px]'>
        <StageProgressBar progress={40} />
        <div className='h-[51px] bg-purple rounded-[12px]'>

        </div>
      </div>
    </section>
  )
}

export default Stage
