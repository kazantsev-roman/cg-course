import styles from "./Game.module.css"
import Header from "./Header/Header"
import Zona from "./Zona/Zona"
import GameOverModal from "./GameOverModal/GameOverModal"
import Footer from "./Footer/Footer";

function Game()
{
	return (
		<div className={styles.wrap}>
			<Header/>
			<Zona/>
			<Footer />
			<GameOverModal />
		</div>
	)
}

export default Game