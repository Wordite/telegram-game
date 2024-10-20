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
    <footer className='bottom-menu w-full relative h-[5.375rem] bg-gradient-to-t from-[#C6C4BA] to-[#D7D5CC] px-[1.25rem] py-[.75rem] rounded-t-[.75rem] flex justify-between'>
      <BottomNavigationButton
        section='home'
        text='Home'
        iconWhite={homeWhite}
        iconSecondary={homeSecondary}
        iconWidth='1.75rem'
        iconHeight='1.8125rem'
      />
      <BottomNavigationButton
        section='airdrop'
        text='Airdrop'
        iconWhite={airdropWhite}
        iconSecondary={airdropSecondary}
        iconWidth='1.5rem'
        iconHeight='1.8125rem'
      />
      <BottomNavigationButton
        section='game'
        text='Game'
        iconWhite={gameWhite}
        iconSecondary={gameSecondary}
        iconWidth='2rem'
        iconHeight='1.5625rem'
      />
      <BottomNavigationButton
        section='friends'
        text='Friends'
        iconWhite={friendsWhite}
        iconSecondary={friendsSecondary}
        iconWidth='1.625rem'
        iconHeight='1.6875rem'
      />
      <BottomNavigationButton
        section='earn'
        text='Earn'
        iconWhite={earnWhite}
        iconSecondary={earnSecondary}
        iconWidth='1.75rem'
        iconHeight='1.8125rem'
      />
    </footer>
  )
}

export default BottomNavigation
