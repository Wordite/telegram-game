import btl from '@assets/icons/btl.png'
import { useSelector } from 'react-redux'
import { selectBtl } from '@app/store/slices/btl'

const Btl = () => {
  const btlBalance = useSelector(selectBtl)

  return (
    <div className='top-menu-btl flex items-center relative w-[5.875rem] translate-y-[-3.75rem] translate-x-[-2rem] duration-300'>
      <img
        className='w-[1.6875rem] h-[1.6875rem] z-10 absolute left-[-0.4rem] -translate-x-[.1875rem]'
        src={btl}
        alt='btl'
      />
      <div className='w-[7.25rem] h-[1.5rem] pb-[.125rem] flex justify-center items-center bg-[rgba(215,213,204,1)] shadow-[inset_0_-0.5rem_0_0_#BAB7AA] rounded-[.75rem] border-[.075rem] border-black'>
        <div className='text-[.875rem] relative'>
          <p className='text z-10 block'>{btlBalance}</p>
        </div>
      </div>
    </div>
  )
}

export default Btl
