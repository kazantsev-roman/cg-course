import styles from "./GameOverModal.module.css"
import { useSelector } from "react-redux";
import State from "../../store/types/State";

function GameOverModal()
{
	const points = useSelector((state: State) => state.points)
	return (
		<>

			<div className={styles.shadow}></div>
			<div className={styles.wrap}>
				{
					points.player > points.king
						? <h1 className={styles.header}>Вы достойны короны</h1>
						: <h1 className={styles.header}>Вы не достойны короны</h1>
				}
			</div>
		</>
	)
}

export default GameOverModal