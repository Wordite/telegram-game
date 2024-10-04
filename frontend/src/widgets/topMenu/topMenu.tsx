import Boosts from "@components/boosts/boosts"
import Coins from "@components/coins/coins"
import Menu from "@components/menu/menu"

const TopMenu = () => {
  return (
    <header className='left-0 top-0 w-full h-[96px] px-[20px] py-[14px] pb-[40px] flex justify-between '>
        <Coins />
        <Boosts />
        <Menu />
    </header>
  )
}

export default TopMenu