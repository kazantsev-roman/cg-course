import styles from "./GameWin.module.css";
import reload from "../../../assets/images/reload.png";
import newGameAction from "../../../store/actions/newGameAction";
import { useDispatch } from "react-redux";

type GameWinProps = {
	setGameOver: (mode: 'win' | 'lose' | 'unknown') => void
}

function GameWin({ setGameOver }: GameWinProps)
{
	const dispatch = useDispatch()

	function setNewGame()
	{
		dispatch(newGameAction())
		setGameOver('unknown')
	}

	return (
		<div className={styles.container}>
			<div className={styles.pyro}>
				<div className={styles.before}></div>
				<div className={styles.after}></div>
			</div>
			<div className={styles.modal}>
				<h1 className={styles.header}>Поздравляем!</h1>
				<p>Это было слишком легко</p>
				<p>Хотите еще сыграть?</p>
				<div className={styles.button_container} onClick={setNewGame}>
					<img className={styles.image} src={reload} alt={"reload"} />
					<p>Новая игра</p>
				</div>
			</div>
		</div>
	)
}

export default GameWin