import styles from "./Game.module.css"
import GameZone from "./GameZone/GameZone"
import Header from "./Header/Header";


function Game()
{
	return (
		<div className={styles.wrap}>
			<Header />
			<GameZone />
		</div>
	)
}

export default Game