import BottomNavigationButton from '@components/bottomNavigationButton/bottomNavigationButton'
import './bottomNavigation.css'

import homeWhite from '@assets/icons/home_white.png'
import homeSecondary from '@assets/icons/home_secondary.png'

import airdropWhite from '@assets/icons/airdrop_white.png'
import airdropSecondary from '@assets/icons/airdrop_secondary.png'

import earnWhite from '@assets/icons/earn_white.png'
import earnSecondary from '@assets/icons/earn_secondary.png'

import gameWhite from '@assets/icons/game_white.png'
import gameSecondary from '@assets/icons/game_secondary.png'

import friendsWhite from '@assets/icons/friends_white.png'
import friendsSecondary from '@assets/icons/friends_secondary.png'

const BottomNavigation = () => {
  return (
    <footer className='bottom-menu w-full relative h-[86px] bg-gradient-to-t from-[#C6C4BA] to-[#D7D5CC] px-[20px] py-[12px] rounded-t-[12px] flex justify-between'>
      <BottomNavigationButton
        section='home'
        text='Home'
        iconWhite={homeWhite}
        iconSecondary={homeSecondary}
        iconWidth={28}
        iconHeight={29}
      />
      <BottomNavigationButton
        section='airdrop'
        text='Airdrop'
        iconWhite={airdropWhite}
        iconSecondary={airdropSecondary}
        iconWidth={24}
        iconHeight={29}
      />
      <BottomNavigationButton
        section='game'
        text='Game'
        iconWhite={gameWhite}
        iconSecondary={gameSecondary}
        iconWidth={32}
        iconHeight={25}
      />
      <BottomNavigationButton
        section='friends'
        text='Friends'
        iconWhite={friendsWhite}
        iconSecondary={friendsSecondary}
        iconWidth={26}
        iconHeight={27}
      />
      <BottomNavigationButton
        section='earn'
        text='Earn'
        iconWhite={earnWhite}
        iconSecondary={earnSecondary}
        iconWidth={28}
        iconHeight={29}
      />
    </footer>
  )
}

export default BottomNavigation
