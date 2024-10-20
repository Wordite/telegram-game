import { selectCoins } from '@app/store/slices/coins'
import coin from '@assets/icons/coin.png'
import plusYellow from '@assets/icons/plus_yellow.png'
import { useSelector } from 'react-redux'

const Coins = () => {
  const coins = useSelector(selectCoins)

  return (
    <div className='top-menu-coins flex items-center relative w-[7.25rem]'>
      <img className='w-[1.75rem] h-[2rem] z-10 absolute left-[-0.3125rem]' src={coin} alt='coin' />
      <div className='w-[7.25rem] h-[1.5rem] pb-[.125rem] flex justify-center items-center bg-[rgba(215,213,204,1)] shadow-[inset_0_-0.5rem_0_0_#BAB7AA] rounded-[.75rem] border-[.075rem] border-black'>
        <p className='text-[.875rem] relative'>
          <span className='text z-10 block'>{coins | 0}</span>
        </p>
      </div>
      <img className='w-[1.75rem] h-[1.75rem] absolute right-[-0.5rem] clickable cursor-pointer' src={plusYellow} alt='plus' />
    </div>
  )
}

export default Coins
