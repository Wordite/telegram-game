import { ShopItems } from '@app/types/shopItems'
import tokens from '@assets/images/tokens.png'
import gold from '@assets/images/gold.png'
import star from '@assets/icons/star_white.png'
import starSecondary from '@assets/icons/star_secondary.png'

interface IShopItemProps {
  type: ShopItems
  count: string
  bonus: number
  price: number
  prevPrice: number
}

const ShopItem = ({ type, count, bonus, price, prevPrice }: IShopItemProps) => {
  const isGold = type === ShopItems.Gold
  const itemImage = isGold ? gold : tokens
  const priceBackground = !isGold
    ? 'bg-orange shadow-[inset_0_-3px_var(--color-orange-dark)]'
    : 'bg-purple shadow-[inset_0_-3px_var(--color-purple-dark)]'

  return (
    <div className='shop-item w-[110px] h-[193px] flex flex-col leading-[1em] items-center border-[#FCF9EA] border-[2px] rounded-[16px] bg-biege-135-deg-gradient'>
      <div className={`text-[24px] text-orange relative z-10 mt-[14px]`}>
        {isGold && <p className='gold-text-shadow text-black top-0'>{count}</p>}
        <p className={`${isGold ? 'gold-text text' : 'text'}`}>{count}</p>
      </div>
      <p className={'text text-[12px] text-secondary relative z-10 mt-[8px]'}>{bonus}% more</p>
      <img className='w-[64px] h-[64px] mt-[8px]' src={itemImage} alt='product' />

      <div className='relative'>
        <div className='flex items-center gap-[2px] pointer-events-none text-[16px] absolute left-[43%] -translate-x-1/2 z-50'>
          <img className='w-[16px] h-[16px]' src={starSecondary} alt='star' />
          <p className='text relative z-10 text-secondary'>{prevPrice}</p>
          <div className='w-[60px] h-[1px] absolute z-20 translate-x-[-7px] rotate-3 bg-orange border-[0.2px] border-black shadow-[0_1px_0_var(--color-black)]'></div>
        </div>

        <div
          className={`${priceBackground} clickable flex items-center gap-[2px] text-[16px] px-[9px] py-[8px] mt-[8px] rounded-[8px] border-black border-[1px]`}
        >
          <img className='w-[16px] h-[16px]' src={star} alt='star' />
          <p className='text relative z-10'>{price}</p>
        </div>
      </div>
    </div>
  )
}

export default ShopItem
