import styles from "./Header.module.css"
import Cell from "../GameZone/Zona/Cell/Cell";
import Window from "./Window/Window";

function Header()
{
	return (
		<div className={styles.wrap}>
			<Window value={"1072"} />
			<div className={styles.colors}>
				<p>НОВЫЕ</p>
				<Cell width={50} height={50} color={"#a8a8a8"} ball={"purple"}/>
				<Cell width={50} height={50} color={"#a8a8a8"} ball={"blue"}/>
				<Cell width={50} height={50} color={"#a8a8a8"} ball={"yellow"}/>
				<p>ЦВЕТА</p>
			</div>
			<Window value={"200"} />
		</div>
	)
}

export default Header