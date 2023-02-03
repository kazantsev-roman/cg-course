import styles from "./GameLose.module.css";
import ButtonNewGame from "../../common/ButtonNewgame/ButtonNewGame";

type GameLoseProps = {
	setGameOver: (mode: 'win' | 'lose' | 'unknown') => void
}

function GameLose({ setGameOver }: GameLoseProps)
{
	return (

		<div className={styles.modal}>
			<h1 className={styles.header}>Вы проиграли..</h1>
			<p>Не стоит расстраиваться</p>
			<p>Попробуйте еще раз</p>
			<ButtonNewGame callback={() => setGameOver('unknown')} />
		</div>
	)
}

export default GameLose