import { selectPopup } from '@app/store/slices/popup'
import { useSelector } from 'react-redux'

const PopupBackground = () => {
  const popup = useSelector(selectPopup)

  return <div style={{ display: popup ? 'block' : 'none' }} className='absolute left-0 top-0 w-screen h-screen z-[100] bg-[rgba(0,0,0,0.5)]'></div>
}

export default PopupBackground
