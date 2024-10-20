import durov from '@assets/images/durov_1.webp'
import TonCoin from '@assets/icons/ton_coin.svg'

interface IRatingPlayerProps {
    place: string
    name: string
    reward: number
    points: number
    isBordered?: boolean
}

const RatingPlayer = ({ place, name, reward, points, isBordered = false }: IRatingPlayerProps) => {
  return (
    <div className={`${isBordered ? '' : 'rating-item'} w-full h-[4rem] pl-[1rem] border-[#FCF9EA] ${isBordered ? 'border-[.125rem]' : 'shadow-[0_-0.125rem_0_#FCF9EA]'} flex items-center bg-biege-gradient-horizontal-2 rounded-[.75rem]`}>
      <p className='text-[1.5rem] text relative z-10'>{place}</p>
      <img
        className='w-[3rem] h-[3rem] ml-[.625rem] rounded-[.5rem] border-black border-[.1rem] object-cover'
        src={durov}
        alt='avatar'
      />

      <div className='text-[.75rem] relative z-10 flex flex-col leading-[1em] gap-[.3125rem] ml-[.625rem]'>
        <p className='text relative z-10'>{name}</p>
        <p className='relative z-10 text-secondary text'>{points} points</p>
      </div>

      <TonCoin className='w-[1.5rem] h-[1.5rem] ml-auto' />
      <p className='text text-[.75rem] relative z-10 ml-[.5rem] mr-[1rem]'>{reward}$</p>
    </div>
  )
}

export default RatingPlayer
