import { ShopItems } from '@app/types/shopItems'
import tokens from '@assets/images/tokens.webp'
import gold from '@assets/images/gold.webp'
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
    ? 'bg-orange shadow-[inset_0_-0.1875rem_var(--color-orange-dark)]'
    : 'bg-purple shadow-[inset_0_-0.1875rem_var(--color-purple-dark)]'

  return (
    <div className='shop-item w-[6.875rem] h-[12.0625rem] flex flex-col leading-[1em] items-center border-[#FCF9EA] border-[.125rem] rounded-[1rem] bg-biege-135-deg-gradient'>
      <div className={`text-[24px] text-orange relative z-10 mt-[14px]`}>
        <p className={`${isGold ? 'gold-text text' : 'text'}`}>{count}</p>
      </div>
      <p className={'text text-[.75rem] text-secondary relative z-10 mt-[.5rem]'}>{bonus}% more</p>
      <img className='w-[4rem] h-[4rem] mt-[.5rem]' src={itemImage} alt='product' />

      <div className='relative'>
        <div className='flex items-center gap-[.125rem] pointer-events-none text-[1rem] absolute left-[43%] -translate-x-1/2 z-50'>
          <img className='w-[1rem] h-[1rem]' src={starSecondary} alt='star' />
          <p className='text relative z-10 text-secondary'>{prevPrice}</p>
          <div className='w-[3.75rem] h-[.0625rem] absolute z-20 translate-x-[-0.4375rem] rotate-3 bg-orange border-[.0125rem] border-black shadow-[0_.0625rem_0_var(--color-black)]'></div>
        </div>

        <div
          className={`${priceBackground} clickable cursor-pointer flex items-center gap-[.125rem] text-[1rem] px-[.5625rem] py-[.5rem] mt-[.5rem] rounded-[.5rem] border-black border-[.0625rem]`}
        >
          <img className='w-[1rem] h-[1rem]' src={star} alt='star' />
          <p className='text relative z-10'>{price}</p>
        </div>
      </div>
    </div>
  )
}

export default ShopItem
