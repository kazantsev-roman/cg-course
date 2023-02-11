import styles from "./GameZone.module.css"
import Zona from "./Zona/Zona";
import Player from "./Player/Player";

function GameZone()
{
	return (
		<div className={styles.wrap}>
			<Player type={"king"} numberOfPoints={1000}  name={"Дора"}/>
			<Zona />
			<Player type={"player"} numberOfPoints={200}  name={"Претендент"}/>
		</div>
	)
}

export default GameZone
