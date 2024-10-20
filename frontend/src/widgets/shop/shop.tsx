import { selectSection } from '@app/store/slices/sidebar'
import { ShopItems } from '@app/types/shopItems'
import { SidebarSections } from '@app/types/sidebarSections'
import ShopItem from '@components/shopItem/shopItem'
import { useAnimations } from '@hooks/useAnimations'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Shop = () => {
  const section = useSelector(selectSection)
  const isActive = section === SidebarSections.Shop
  const { openScale } = useAnimations()

  useEffect(() => {
    if (isActive) openScale('.shop-item')
  }, [isActive])

  return (
    <div
      className={`sidebar-section absolute w-full h-full pt-[6rem] pb-[5rem] bg-biege-biege-neutral-3 top-0 left-0 overflow-y-auto no-scrollbar ${
        isActive ? 'active' : ''
      }`}
    >
      <div className='px-[1.25rem] pb-[1.375rem] flex flex-col'>
        <div className='flex flex-col items-center'>

          <p className='shop-item text-[1.5rem] text'>Tokens</p>
          <div className='w-full flex mt-[.3125rem] max-w-[22.5rem] mx-auto flex-wrap gap-[.625rem] justify-start gap-y-[.625rem]'>
            <ShopItem bonus={50} count='200' prevPrice={100} price={50} type={ShopItems.Tokens} />
            <ShopItem bonus={80} count='400' prevPrice={150} price={100} type={ShopItems.Tokens} />
            <ShopItem bonus={100} count='1K' prevPrice={250} price={150} type={ShopItems.Tokens} />
            <ShopItem bonus={150} count='5K' prevPrice={300} price={200} type={ShopItems.Tokens} />
            <ShopItem bonus={350} count='25K' prevPrice={400} price={250} type={ShopItems.Tokens} />
            <ShopItem bonus={500} count='50K' prevPrice={500} price={350} type={ShopItems.Tokens} />
          </div>

          <p className='shop-item text-[1.5rem] text mt-[1rem]'>Gold</p>
            <div className='w-full flex max-w-[22.5rem] mx-auto justify-start gap-[.625rem] mt-[.3125rem] flex-wrap gap-y-[.625rem]'>
              <ShopItem bonus={50} count='30M' prevPrice={50} price={10} type={ShopItems.Gold} />
              <ShopItem bonus={80} count='60M' prevPrice={100} price={50} type={ShopItems.Gold} />
              <ShopItem bonus={100} count='120M' prevPrice={200} price={100} type={ShopItems.Gold} />
              <ShopItem bonus={150} count='380M' prevPrice={300} price={150} type={ShopItems.Gold} />
              <ShopItem bonus={350} count='3.6B' prevPrice={400} price={250} type={ShopItems.Gold} />
              <ShopItem bonus={500} count='7B' prevPrice={500} price={350} type={ShopItems.Gold} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
