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
      } boost-gold-mining-popup absolute w-[calc(100%-40px)] top-1/2 left-1/2`}
    >
      <Chest className='w-[150px] h-[158px] relative left-1/2 top-0 -translate-x-1/2 translate-y-[4px]' />

      <div className='bg-biege-biege-neutral-2 h-[449px] rounded-[20px] border-[4px] border-biege-4 relative'>
        <Cross
          onClick={crossClick}
          className='clickable absolute w-[42px] h-[42px] right-[-5px] top-[-54px] p-[5px] cursor-pointer'
        />
        <div className='text-[24px] w-[240px] h-[48px] absolute left-1/2 -translate-x-1/2 top-[-24px] flex items-center justify-center bg-orange rounded-[100px] border-black border-[1px]'>
          <ChestCoin className='absolute w-[24px] h-[24px] right-[40px] top-[-17px]' />
          <p className='text relative z-10'>Boost gold mining</p>
        </div>
        <div className='text-[24px] relative z-10 flex justify-center gap-[9px] leading-[1em] mt-[35px]'>
          <span className='text'>Speed </span>
          <span className='strikethrough text text-orange relative'>x2 </span>
          <span className='text'>x12</span>
        </div>
        <Rocket className='w-[130px] h-[123px] mt-[22px] mx-auto' />

        <div className='flex justify-center items-center relative mt-[30px] mx-auto translate-x-[-14px]'>
          <img className='w-[28px] h-[32px] z-10 relative left-[14px]' src={coin} alt='coin' />
          <div className='pl-[22px] pr-[11px] h-[24px] pb-[2px] flex justify-center items-center bg-[rgba(215,213,204,1)] shadow-[inset_0_-8px_0_0_#BAB7AA] rounded-[12px] border-[1.2px] border-black'>
            <p className='text-[14px] relative'>
              <span className='text z-10 block'>+10,230 /hr</span>
            </p>
          </div>
        </div>

        <p className='text-[24px] mt-[2px] flex justify-center'>
          <span className='text relative z-10'>00:00:00</span>
        </p>

        <div className='px-[20px] relative mt-[8px]'>
          <BoostGoldMiningProgressBar progress={33} />
          <Clock className='absolute z-50 top-[-50%] left-[20px]' />
        </div>

        <BuyGoldMiningBoosts />
      </div>
    </section>
  )
}

export default BoostGoldMiningPopup
