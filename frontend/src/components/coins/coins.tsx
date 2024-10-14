import { selectCoins } from '@app/store/slices/coins'
import coin from '@assets/icons/coin.png'
import plusYellow from '@assets/icons/plus_yellow.png'
import { useSelector } from 'react-redux'

const Coins = () => {
  const coins = useSelector(selectCoins)

  return (
    <div className='top-menu-coins flex items-center relative w-[116px]'>
      <img className='w-[28px] h-[32px] z-10 absolute left-[-5px]' src={coin} alt='coin' />
      <div className='w-[116px] h-[24px] pb-[2px] flex justify-center items-center bg-[rgba(215,213,204,1)] shadow-[inset_0_-8px_0_0_#BAB7AA] rounded-[12px] border-[1.2px] border-black'>
        <p className='text-[14px] relative'>
          <span className='text z-10 block'>{coins | 0}</span>
        </p>
      </div>
      <img className='w-[28px] h-[28px] absolute right-[-8px] clickable cursor-pointer' src={plusYellow} alt='plus' />
    </div>
  )
}

export default Coins
