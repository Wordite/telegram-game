import { useEffect } from 'react'
import TopMenu from '@widgets/topMenu/topMenu'
import init from './init'
import BottomNavigation from '@widgets/bottomNavigation/bottomNavigation'
import Background from '@widgets/background/Background'
import Home from '@pages/home'
import Friends from '@pages/friends'
import Airdrop from '@pages/airdrop'
import Earn from '@pages/earn'
import Game from '@pages/game'
import { useSelector } from 'react-redux'
import { selectPage } from './store/slices/page'
import PopupBackground from '@components/popupBackground/popupBackground'

const pages = {
  home: <Home />,
  friends: <Friends />,
  airdrop: <Airdrop />,
  game: <Game />,
  earn: <Earn />,
}

const App = () => {
  const page = useSelector(selectPage) || 'home'

  useEffect(() => {
    init()
  }, [page])

  return (
    <main className='h-screen relative'>
      <Background />
      <PopupBackground />
      <TopMenu />
      {pages[page]}
      <BottomNavigation />
    </main>
  )
}

export default App
