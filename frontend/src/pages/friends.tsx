import Container from "@app/container"
import FriendsTitle from "@components/friendsTitle/friendsTitle"
import InviteFriends from "@widgets/inviteFriends/inviteFriends"
import Referals from "@widgets/referals/referals"

const Friends = () => (
  <Container>
    <FriendsTitle />
    <Referals />
    <InviteFriends />
  </Container>
)

export default Friends
