import styles from "./Zona.module.css"
import { useSelector } from "react-redux"
import GameZone from "./GameZone/GameZone"
import Player from "./Player/Player"
import State from "../../store/types/State"

function Zona()
{
	const canPlay = useSelector((state: State) => state.canPlay)

	return (
		<div className={styles.wrap} style={{cursor: canPlay ? "default" : "none"}}>
			<Player type={"king"} numberOfPoints={1000}  name={"Дора"}/>
			<GameZone />
			<Player type={"player"} numberOfPoints={200}  name={"Претендент"}/>
		</div>
	)
}

export default Zona
