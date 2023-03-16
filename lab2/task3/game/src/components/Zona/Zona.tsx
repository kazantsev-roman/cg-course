import styles from "./Zona.module.css"
import { useSelector } from "react-redux"
import GameZone from "./GameZone/GameZone"
import Player from "./Player/Player"
import State from "../../store/types/State"

function Zona()
{
	const canPlay = useSelector((state: State) => state.canPlay)
	const points = useSelector((state: State) => state.points)

	return (
		<div className={styles.wrap} style={{cursor: canPlay ? "default" : "none"}}>
			<Player type={"king"} numberOfPoints={points.king}  name={"Лора"}/>
			<GameZone />
			<Player type={"player"} numberOfPoints={points.player}  name={"Претендент"}/>
		</div>
	)
}

export default Zona
