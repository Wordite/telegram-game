import BottomNavigationButton from "@components/bottomNavigationButton/bottomNavigationButton"
import HomeIcon from '@assets/icons/home.svg'
import AirdropIcon from '@assets/icons/airdrop.svg'
import EarnIcon from '@assets/icons/earn.svg'
import GameIcon from '@assets/icons/game.svg'
import FriendsIcon from '@assets/icons/friends.svg'

const BottomNavigation = () => {
  return (
    <footer className='bottom-menu w-full relative h-[86px] bg-gradient-to-t from-[#C6C4BA] to-[#D7D5CC] px-[20px] py-[12px] rounded-t-[12px] flex justify-between'>
      <BottomNavigationButton link='/' text='Home' Icon={HomeIcon} />
      <BottomNavigationButton link='/airdrop' text='Airdrop' Icon={AirdropIcon} />
      <BottomNavigationButton link='/game' text='Game' Icon={GameIcon} />
      <BottomNavigationButton link='/friends' text='Friends' Icon={FriendsIcon} />
      <BottomNavigationButton link='/earn' text='Earn' Icon={EarnIcon} />
    </footer>
  )
}

export default BottomNavigation
