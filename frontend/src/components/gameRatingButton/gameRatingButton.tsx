import { SidebarSections } from '@app/types/sidebarSections'
import SidebarButton from '@components/sidebarButton/sidebarButton'
import stars from '@assets/icons/stars.png'

const GameRatingButton = () => {
  return (
    <div className='open-scale hide-scale absolute bottom-[11.25rem]'>
      <SidebarButton
        iconWidth='2.25rem'
        iconHeight='1.8125rem'
        icon={stars}
        name='Rating'
        section={SidebarSections.Rating}
      />

      <div className='mt-[.5rem] relative -z-10'>
        <div className='ton-prize-pool game bg-biege-neutral w-[3.55rem] h-[3.55rem] shadow-[inset_0rem_-0.25rem_0rem_rgba(165,155,115,0.64)] rounded-[.5rem] absolute left-[.1rem] top-[-2.0625rem] border-transparent border-[.1rem]'></div>
        <p className='text-[.625rem] text-secondary text-center w-[3.4375rem] text leading-[.75rem] ml-[.125rem] -translate-y-[.25rem]'>
          100 TON prize pool
        </p>
      </div>
    </div>
  )
}

export default GameRatingButton
