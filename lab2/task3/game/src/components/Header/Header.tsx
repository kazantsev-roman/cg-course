import styles from "./Header.module.css"
import Cell from "../GameZone/Zona/Cell/Cell";
import Window from "./Window/Window";
import { useSelector } from "react-redux"
import State from "../../store/types/State";

function Header()
{
	const nextBalls = useSelector((state: State) => state.nextBalls)
	return (
		<div className={styles.wrap}>
			<Window value={"1072"} />
			<div className={styles.colors}>
				<p>НОВЫЕ</p>
				<Cell width={50} height={50} color={"#a8a8a8"} ball={nextBalls[0]} viewOnly={true} />
				<Cell width={50} height={50} color={"#a8a8a8"} ball={nextBalls[1]} viewOnly={true}/>
				<Cell width={50} height={50} color={"#a8a8a8"} ball={nextBalls[2]} viewOnly={true}/>
				<p>ЦВЕТА</p>
			</div>
			<Window value={"200"} />
		</div>
	)
}

export default Header