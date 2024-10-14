import Container from '@app/container'
import BoostGoldMiningPopup from '@widgets/boostGoldMiningPopup/boostGoldMiningPopup'
import Lamp from '@widgets/lamp/lamp'
import Rating from '@widgets/rating/rating'
import Shop from '@widgets/shop/shop'
import SidebarMenu from '@widgets/sidebarMenu/sidebarMenu'
import Spin from '@widgets/spin/spin'
import Stage from '@widgets/stage/stage'

const Home = () => (
  <>
    <BoostGoldMiningPopup />
    <Container>
      <SidebarMenu />
      <Lamp />
      <Stage />

      <Shop />
      <Rating />
      <Spin />
    </Container>
  </>
)

export default Home
