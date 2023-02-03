import styles from "./GameWin.module.css";
import ButtonNewGame from "../../common/ButtonNewgame/ButtonNewGame";

type GameWinProps = {
	setGameOver: (mode: 'win' | 'lose' | 'unknown') => void
}

function GameWin({ setGameOver }: GameWinProps)
{
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
				<ButtonNewGame callback={() => setGameOver('unknown')} />
			</div>
		</div>
	)
}

export default GameWin