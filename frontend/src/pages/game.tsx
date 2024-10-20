import Container from '@app/container'
import GamePlayButton from '@components/gamePlayButton/gamePlayButton'
import GameRatingButton from '@components/gameRatingButton/gameRatingButton'
import Rating from '@widgets/rating/rating'
import GameTypeButtons from '@components/gameTypeButtons/gameTypeButtons'
import GameTapPopup from '@components/gameTapPopup/gameTapPopup'
import GameTimer from '@components/gameTimer/gameTimer'
import GameClickCounter from '@components/gameClickCounter/gameClickCounter'
import GameWinPopup from '@components/gameWinPopup/gameWinPopup'
import './game.css'
import Bath from '@components/bath/bath'

const Game = () => (
  <>
    <GameTapPopup />
    <Container>
      <Bath />
      <GameWinPopup />
      <GameClickCounter />
      <GameTypeButtons />
      <GameTimer />
      <GameRatingButton />
      <GamePlayButton />
      <Rating />
    </Container>
  </>
)

export default Game
