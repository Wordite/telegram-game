import durov from '@assets/images/durov_1.png'
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
    <div className={`${isBordered ? '' : 'rating-item'} w-full h-[64px] pl-[16px] border-[#FCF9EA] ${isBordered ? 'border-[2px]' : 'shadow-[0_-2px_0_#FCF9EA]'} flex items-center bg-biege-gradient-horizontal-2 rounded-[12px]`}>
      <p className='text-[24px] text relative z-10'>{place}</p>
      <img
        className='w-[48px] h-[48px] ml-[10px] rounded-[8px] border-black border-[1.6px] object-cover'
        src={durov}
        alt='avatar'
      />

      <div className='text-[12px] relative z-10 flex flex-col leading-[1em] gap-[5px] ml-[10px]'>
        <p className='text relative z-10'>{name}</p>
        <p className='relative z-10 text-secondary text'>{points} points</p>
      </div>

      <TonCoin className='w-[24px] h-[24px] ml-auto' />
      <p className='text text-[12px] relative z-10 ml-[8px] mr-[16px]'>{reward}$</p>
    </div>
  )
}

export default RatingPlayer
