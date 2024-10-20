import { selectSection } from '@app/store/slices/sidebar'
import { SidebarSections } from '@app/types/sidebarSections'
import { useAnimations } from '@hooks/useAnimations'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import StopWatch from '@assets/icons/stopwatch.svg'
import BiegeBlockNeutral from '@shared/biegeBlockNeutral/biegeBlockNeutral'
import RatingPlayer from '@components/ratingPlayer/ratingPlayer'
import useTimer from '@hooks/useTimer'
import './rating.css'

const Rating = () => {
  const section = useSelector(selectSection)
  const isActive = section === SidebarSections.Rating
  const { openScale } = useAnimations()
  const time = useTimer(23063)

  useEffect(() => {
    if (isActive) openScale('.rating-item')
  }, [isActive])

  return (
    <>
      <div
        className={`sidebar-section rating absolute w-full h-full pt-[6rem] pb-[5rem] bg-biege-biege-neutral-3 top-0 left-0 overflow-y-auto no-scrollbar ${
          isActive ? 'active' : ''
        }`}
      >
        <div className='px-[1.25rem] pb-[1.375rem] flex flex-col'>
          <div className='flex flex-col items-center'>
            <div className='rating-item w-full h-[4.75rem] pl-[1rem] flex items-center bg-biege-gradient-horizontal-2 rounded-[.75rem] shadow-[0_-0.125rem_0_#FCF9EA]'>
              <StopWatch className='w-[2rem] h-[2rem] mb-[.4375rem]' />

              <div className='rating-item flex flex-col leading-[.9em] gap-[.5rem] ml-[.5rem]'>
                <p className='text-[1.5rem] text relative z-10'>Season 1</p>
                <div className='text-[.75rem] flex gap-[.1875rem]'>
                  <p className='text-secondary text relative z-10'>Season ends:</p>
                  <p className='relative z-10 text'>{time}</p>
                </div>
              </div>

              <BiegeBlockNeutral className='rating-item w-[3.75rem] h-[3.75rem] border-black border-[.1rem] rounded-[.5rem] ml-auto mr-[.5rem] flex-col leading-[.85em]'>
                <p className='text-[1rem] text relative z-10'>1 000</p>
                <p className='text-[.75rem] text relative z-10'>USDT</p>
              </BiegeBlockNeutral>
            </div>
          </div>

          <div className='rating-item text-[1.5rem] text leading-[1em] relative z-10 mt-[1rem]'>
            Collect points from in-game activities and get{' '}
            <span className='text-orange'>USDT rewards</span> in the end of the season!
          </div>

          <div className='mt-[1rem] flex flex-col gap-[.5rem] mb-[4.5rem]'>
            <RatingPlayer name='Pavel Duroww🐈‍⬛' points={1000} reward={500} place='1' />
            <RatingPlayer name='Franfisac' reward={500} points={950} place='2' />
            <RatingPlayer name='Merrgi&Orif1' reward={100} points={900} place='3' />
            <RatingPlayer name='Franfisac' reward={50} points={650} place='4' />
            <RatingPlayer name='Franfisac' reward={50} points={500} place='5' />
            <RatingPlayer name='Franfisac' reward={50} points={490} place='6' />
            <RatingPlayer name='Pavel Durow' reward={50} points={430} place='7' />
            <RatingPlayer name='Pavel Durow' reward={50} points={300} place='8' />
            <RatingPlayer name='Pavel Durow' reward={50} points={210} place='9' />
            <RatingPlayer name='Pavel Durow' reward={50} points={200} place='10' />
          </div>
        </div>
      </div>
      <div className={`${isActive ? 'active' : ''} rating-yourself absolute w-[calc(100%-2.5rem)] left-[1.25rem] z-[24000]`}>
        <RatingPlayer name='You' reward={0} points={0} place='100+' isBordered={true} />
      </div>
    </>
  )
}

export default Rating
