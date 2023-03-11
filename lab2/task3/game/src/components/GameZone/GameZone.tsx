import styles from "./GameZone.module.css"
import Zona from "./Zona/Zona";
import Player from "./Player/Player";
import { useSelector } from "react-redux";
import State from "../../store/types/State";

function GameZone()
{
	const canPlay = useSelector((state: State) => state.canPlay)

	return (
		<div className={styles.wrap} style={{cursor: canPlay ? "default" : "none"}}>
			<Player type={"king"} numberOfPoints={1000}  name={"Дора"}/>
			<Zona />
			<Player type={"player"} numberOfPoints={200}  name={"Претендент"}/>
		</div>
	)
}

export default GameZone
