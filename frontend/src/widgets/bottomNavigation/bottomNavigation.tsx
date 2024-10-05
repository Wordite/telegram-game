import BottomNavigationButton from '@components/bottomNavigationButton/bottomNavigationButton'
import HomeIcon from '@assets/icons/home.svg'
import AirdropIcon from '@assets/icons/airdrop.svg'
import EarnIcon from '@assets/icons/earn.svg'
import GameIcon from '@assets/icons/game.svg'
import FriendsIcon from '@assets/icons/friends.svg'
import './bottomNavigation.css'

const BottomNavigation = () => {
  return (
    <footer className='bottom-menu w-full relative h-[86px] bg-gradient-to-t from-[#C6C4BA] to-[#D7D5CC] px-[20px] py-[12px] rounded-t-[12px] flex justify-between'>
      <BottomNavigationButton section='home' text='Home' Icon={HomeIcon} />
      <BottomNavigationButton section='airdrop' text='Airdrop' Icon={AirdropIcon} />
      <BottomNavigationButton section='game' text='Game' Icon={GameIcon} />
      <BottomNavigationButton section='friends' text='Friends' Icon={FriendsIcon} />
      <BottomNavigationButton section='earn' text='Earn' Icon={EarnIcon} />
    </footer>
  )
}

export default BottomNavigation
