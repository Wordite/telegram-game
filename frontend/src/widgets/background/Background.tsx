import { selectPage } from '@app/store/slices/page'
import background from '@assets/images/background.png'
import { useSelector } from 'react-redux'
import './background.css'

const Background = () => {
  const page = useSelector(selectPage)
  const isHome = page == 'home'

  return (
    <div className={`background  ${isHome ? '' : 'dark'}`}>
      <img
        className='w-full h-[calc(100vh-70px)] absolute -z-50 object-cover'
        src={background}
        alt='bg'
      />
      {!isHome && <div className='absolute -z-40 w-full h-screen bg-popup-gradient-background' />}
    </div>
  )
}

export default Background
