import { selectSection } from '@app/store/slices/sidebar'
import { ShopItems } from '@app/types/shopItems'
import { SidebarSections } from '@app/types/sidebarSections'
import { useAnimations } from '@hooks/useAnimations'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import StopWatch from '@assets/icons/stopwatch.svg'
import BiegeBlockNeutral from '@shared/biegeBlockNeutral/biegeBlockNeutral'
import RatingPlayer from '@components/ratingPlayer/ratingPlayer'
import './rating.css'

const Rating = () => {
  const section = useSelector(selectSection)
  const isActive = section === SidebarSections.Rating
  const { openScale } = useAnimations()

  useEffect(() => {
    if (isActive) openScale('.rating-item')
  }, [isActive])

  return (
    <>
      <div
        className={`sidebar-section rating absolute w-full h-full pt-[96px] pb-[80px] bg-biege-biege-neutral-3 top-0 left-0 overflow-y-auto no-scrollbar ${
          isActive ? 'active' : ''
        }`}
      >
        <div className='px-[20px] pb-[22px] flex flex-col'>
          <div className='flex flex-col items-center'>
            <div className='rating-item w-full h-[76px] pl-[16px] flex items-center bg-biege-gradient-horizontal-2 rounded-[12px] shadow-[0_-2px_0_#FCF9EA]'>
              <StopWatch className='w-[32px] h-[32px] mb-[7px]' />

              <div className='rating-item flex flex-col leading-[.9em] gap-[8px] ml-[8px]'>
                <p className='text-[24px] text relative z-10'>Season 1</p>
                <div className='text-[12px] flex gap-[3px]'>
                  <p className='text-secondary text relative z-10'>Season ends:</p>
                  <p className='relative z-10 text'>06:24:23</p>
                </div>
              </div>

              <BiegeBlockNeutral className='rating-item w-[60px] h-[60px] border-black border-[1.6px] rounded-[8px] ml-auto mr-[8px] flex-col leading-[.85em]'>
                <p className='text-[16px] text relative z-10'>1 000</p>
                <p className='text-[12px] text relative z-10'>USDT</p>
              </BiegeBlockNeutral>
            </div>
          </div>

          <div className='rating-item text-[24px] text leading-[1em] relative z-10 mt-[16px]'>
            Collect points from in-game activities and get{' '}
            <span className='text-orange'>USDT rewards</span> in the end of the season!
          </div>

          <div className='mt-[16px] flex flex-col gap-[8px] mb-[72px]'>
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
      <div className={`${isActive ? 'active' : ''} rating-yourself absolute w-[calc(100%-40px)] left-[20px] z-[10000]`}>
        <RatingPlayer name='You' reward={0} points={0} place='100+' isBordered={true} />
      </div>
    </>
  )
}

export default Rating
