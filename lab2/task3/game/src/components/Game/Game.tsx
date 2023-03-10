import styles from "./Game.module.css"
import GameZone from "./GameZone/GameZone"
import Header from "./Header/Header";
import initialState from "../../store/reducer/initialState/initialState";
import GetShortestPath from "../../utils/GetShortestPath";
import GetMoves from "../../utils/GetMoves";

function Game()
{
	console.log(GetMoves(GetShortestPath(initialState, {x: 1, y: 5}, {x: 4, y: 2})))
	return (
		<div className={styles.wrap}>
			<Header />
			<GameZone />
		</div>
	)
}

export default Game