import { selectPopup } from '@app/store/slices/popup'
import { useSelector } from 'react-redux'
import { Popups } from '@app/types/popups'
import { usePopup } from '@hooks/usePopup'
import Chest from '@assets/images/riches.svg'
import ChestCoin from '@assets/images/chest_coin.svg'
import Cross from '@assets/icons/cross.svg'
import Rocket from '@assets/images/rocket.svg'
import coin from '@assets/icons/coin.png'
import BoostGoldMiningProgressBar from '@components/boostGoldMiningProgressBar/boostGoldMiningProgressBar'
import Clock from '@assets/images/clock.svg'
import BuyGoldMiningBoosts from '@components/buyGoldMiningBoosts/buyGoldMiningBoosts'
import './boostGoldMiningPopup.css'

const BoostGoldMiningPopup = () => {
  const popup = useSelector(selectPopup)
  const isActive = popup === Popups.BoostGoldMining
  const { closePopup } = usePopup(Popups.BoostGoldMining)

  const crossClick = () => {
    closePopup()
  }

  return (
    <section
      className={`${
        isActive ? 'active' : ''
      } popup absolute w-[calc(100%-2.5rem)] top-1/2 left-1/2`}
    >
      <Chest className='w-[9.375rem] h-[9.875rem] relative left-1/2 top-0 -translate-x-1/2 translate-y-[.25rem]' />

      <div className='bg-biege-biege-neutral-2 h-[28.0625rem] rounded-[1.25rem] border-[.25rem] border-biege-4 relative'>
        <Cross
          onClick={crossClick}
          className='clickable boost-gold-mining-popup-cross absolute w-[2.625rem] h-[2.625rem] right-[-0.3125rem] top-[-3.375rem] p-[.3125rem] cursor-pointer'
        />
        <div className='text-[1.5rem] w-[15rem] h-[3rem] absolute left-1/2 -translate-x-1/2 top-[-1.5rem] flex items-center justify-center bg-orange rounded-[6.25rem] border-black border-[.0625rem]'>
          <ChestCoin className='absolute w-[1.5rem] h-[1.5rem] right-[2.5rem] top-[-1.0625rem]' />
          <p className='text relative z-10'>Boost gold mining</p>
        </div>
        <div className='text-[1.5rem] relative z-10 flex justify-center gap-[.5625rem] leading-[1em] mt-[2.1875rem]'>
          <span className='text'>Speed </span>
          <span className='strikethrough text text-orange relative'>x2 </span>
          <span className='text'>x12</span>
        </div>
        <Rocket className='w-[8.125rem] h-[7.6875rem] mt-[1.375rem] mx-auto' />

        <div className='flex justify-center items-center relative mt-[1.875rem] mx-auto translate-x-[-0.875rem]'>
          <img className='w-[1.75rem] h-[2rem] z-10 relative left-[.875rem]' src={coin} alt='coin' />
          <div className='pl-[1.375rem] pr-[.6875rem] h-[1.5rem] pb-[.125rem] flex justify-center items-center bg-[rgba(215,213,204,1)] shadow-[inset_0_-0.5rem_0_0_#BAB7AA] rounded-[.75rem] border-[.075rem] border-black'>
            <p className='text-[.875rem] relative'>
              <span className='text z-10 block'>+10,230 /hr</span>
            </p>
          </div>
        </div>

        <p className='text-[1.5rem] mt-[.125rem] flex justify-center'>
          <span className='text relative z-10'>00:00:00</span>
        </p>

        <div className='px-[1.25rem] relative mt-[.5rem]'>
          <BoostGoldMiningProgressBar progress={33} />
          <Clock className='w-[2.9375rem] h-[3rem] absolute z-50 top-[-50%] left-[1rem]' />
        </div>

        <BuyGoldMiningBoosts />
      </div>
    </section>
  )
}

export default BoostGoldMiningPopup
