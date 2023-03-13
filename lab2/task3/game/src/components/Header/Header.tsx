import styles from "./Header.module.css"
import { useSelector } from "react-redux"
import Cell from "../Zona/GameZone/Cell/Cell"
import Window from "./Window/Window"
import State from "../../store/types/State"
import Ball from "../../types/Ball"
import Colors from "../../store/constants/colors";

function Header()
{
	const nextBalls = useSelector((state: State) => state.nextBalls)
	const points = useSelector((state: State) => state.points)

	const getBall = (color: Colors | null): Ball | null => {
		return (color)
			? { position: {x: -1, y: -1}, color: color, removed: false }
			: null
	}

	return (
		<div className={styles.wrap}>
			<Window value={points.king.toString()} />
			<div className={styles.colors}>
				<p>НОВЫЕ</p>
				<Cell size={{width: 50, height: 50}} ball={getBall(nextBalls[0])} viewOnly={true} />
				<Cell size={{width: 50, height: 50}} ball={getBall(nextBalls[1])} viewOnly={true}/>
				<Cell size={{width: 50, height: 50}} ball={getBall(nextBalls[2])} viewOnly={true}/>
				<p>ЦВЕТА</p>
			</div>
			<Window value={points.player.toString()} />
		</div>
	)
}

export default Header