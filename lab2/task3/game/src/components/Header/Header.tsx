import styles from "./Header.module.css"
import { useSelector } from "react-redux"
import Cell from "../Zona/GameZone/Cell/Cell"
import Window from "./Window/Window"
import State from "../../store/types/State"
import Ball from "../../types/Ball"

function Header()
{
	const nextBalls = useSelector((state: State) => state.nextBalls)

	const getBall = (color: string | null): Ball | null => {
		return (color)
			? { position: {x: 0, y: 0}, color: color }
			: null
	}

	return (
		<div className={styles.wrap}>
			<Window value={"1072"} />
			<div className={styles.colors}>
				<p>НОВЫЕ</p>
				<Cell size={{width: 50, height: 50}} ball={getBall(nextBalls[0])} viewOnly={true} />
				<Cell size={{width: 50, height: 50}} ball={getBall(nextBalls[1])} viewOnly={true}/>
				<Cell size={{width: 50, height: 50}} ball={getBall(nextBalls[2])} viewOnly={true}/>
				<p>ЦВЕТА</p>
			</div>
			<Window value={"200"} />
		</div>
	)
}

export default Header