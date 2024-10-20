import { selectPage } from '@app/store/slices/page'
import background from '@assets/images/background.webp'
import { useSelector } from 'react-redux'
import './background.css'

const Background = () => {
  const page = useSelector(selectPage)
  const isHomeOrGame = page === 'home' || page === 'game'

  return (
    <div className={`background  ${isHomeOrGame ? '' : 'dark'}`}>
      <img
        className='w-full h-[calc(100vh-4.375rem)] absolute -z-50 object-cover'
        src={background}
        alt='bg'
      />
      {!isHomeOrGame && <div className='absolute -z-50 w-full h-screen bg-popup-gradient-background' />}
    </div>
  )
}

export default Background
