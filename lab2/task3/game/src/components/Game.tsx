import styles from "./Game.module.css"
import Header from "./Header/Header"
import Zona from "./Zona/Zona"

function Game()
{
	return (
		<div className={styles.wrap}>
			<Header/>
			<Zona/>
		</div>
	)
}

export default Game