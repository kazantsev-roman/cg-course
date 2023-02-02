import styles from "./GameLose.module.css";
import reload from "../../../assets/images/reload.png";
import { useDispatch } from "react-redux";
import newGameAction from "../../../store/actions/newGameAction";

type GameLoseProps = {
	setGameOver: (mode: 'win' | 'lose' | 'unknown') => void
}

function GameLose({ setGameOver }: GameLoseProps)
{	const dispatch = useDispatch()

	function setNewGame()
	{
		dispatch(newGameAction())
		setGameOver('unknown')
	}

	return (

		<div className={styles.modal}>
			<h1 className={styles.header}>Вы проиграли..</h1>
			<p>Не стоит расстраиваться</p>
			<p>Попробуйте еще раз</p>
			<div className={styles.button_container} onClick={setNewGame}>
				<img className={styles.image} src={reload} alt={"reload"} />
				<p>Новая игра</p>
			</div>
		</div>
	)
}

export default GameLose