import flask from '@assets/images/flask.png'
import plusPurple from '@assets/icons/plus_purple.png'
import arrowUp from '@assets/icons/arrow_up.png'
import { useSelector } from 'react-redux'
import { selectSection } from '@app/store/slices/sidebar'
import { selectPage } from '@app/store/slices/page'
import { selectBoosts } from '@app/store/slices/boosts'

const Boosts = () => {
  const section = useSelector(selectSection)
  const page = useSelector(selectPage)
  const boostsBalance = useSelector(selectBoosts)

  return (
    <div className='top-menu-boosts flex items-center relative w-[7.25rem] ml-[2.0625rem]'>
      <img
        className='w-[2.25rem] h-[2.25rem] z-10 absolute left-[-0.75rem] -translate-y-[.1875rem] -translate-x-[.1875rem]'
        src={flask}
        alt='boost'
      />
      <div className='w-[7.25rem] h-[1.5rem] pb-[.125rem] flex justify-center items-center bg-[rgba(215,213,204,1)] shadow-[inset_0_-0.5rem_0_0_#BAB7AA] rounded-[.75rem] border-[.075rem] border-black'>
        <div className='text-[.875rem] relative'>
          <p className='text z-10 block'>{boostsBalance}</p>
          {(!section && page !== 'game') && (
            <div className='absolute bottom-[-1.25rem] left-1/2 -translate-x-1/2 flex text-[.625rem] items-center leading-[1em]'>
              <p className='text-secondary'>Income</p>
              <p className='text-purple-icon ml-[.1875rem]'>4%</p>
              <img
                className='w-[.5625rem] h-[.6875rem] ml-[.25rem] translate-y-[-0.125rem]'
                src={arrowUp}
                alt='arrow'
              />
            </div>
          )}
        </div>
      </div>
      <img
        className='w-[1.75rem] h-[1.875rem] absolute right-[-0.875rem] clickable cursor-pointer'
        src={plusPurple}
        alt='plus'
      />
    </div>
  )
}

export default Boosts
