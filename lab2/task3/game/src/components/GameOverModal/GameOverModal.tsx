import styles from "./GameOverModal.module.css"
import { useDispatch, useSelector } from "react-redux";
import State from "../../store/types/State";
import newGame from "../../store/actions/NewGame";

function GameOverModal()
{
	const dispatch = useDispatch()

	const points = useSelector((state: State) => state.points)
	const numberOfFreeCell = useSelector((state: State) => state.numberOfFreeCell)

	const NewGame = () => {
		dispatch(newGame())
	}
	return (
		<>
			{
				numberOfFreeCell === 0 &&
				<>
                    <div className={styles.shadow}></div>
                    <div className={styles.wrap}>
						{
							points.player > points.king
								? <h1 className={styles.header}>Вы достойны короны</h1>
								: <h1 className={styles.header}>Вы не достойны короны</h1>
						}
                        <div>
                            <span className={styles.result}>Ваш результат: </span>
                            <span className={styles.points}>{points.player}</span>
                        </div>
                        <div className={styles.button} onClick={NewGame}>
                            <div>Новая игра</div>
                        </div>
                    </div>
				</>
			}
		</>
	)
}

export default GameOverModal