import Layout from "@app/layout"
import Lamp from "@widgets/lamp/lamp"
import SidebarMenu from "@widgets/sidebarMenu/sidebarMenu"
import Stage from "@widgets/stage/stage"



const Home = () => (
  <Layout>
    <SidebarMenu />
    <Lamp />
    <Stage />
  </Layout>
)

export default Home
