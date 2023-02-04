import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GameState  from "../../types/GameState";
import isAllCorrectLettersWasUsed from "../../utils/isAllCorrectLettersWasUsed";
import styles from "./GameOver.module.css";
import GameWin from "./GameWin/GameWin";
import GameLose from "./GameLose/GameLose";

function GameOver()
{
	const [gameOver, setGameOver] = useState<'lose' | 'win' | 'unknown'>('unknown')

	const numberOfAttempts = useSelector((state: GameState) => state.numberOfAttempts)
	const alphabet = useSelector((state: GameState) => state.alphabet)
	const answer = useSelector((state: GameState) => state.answer)
	const usedLetters = useSelector((state: GameState) => state.alphabet.filter(value => value.used))

	function isGameOver()
	{
		if (isAllCorrectLettersWasUsed(usedLetters, answer))
		{
			setGameOver('win')
			return
		}
		if (numberOfAttempts <= 0)
		{
			setGameOver('lose')
			return
		}

		setGameOver('unknown')
	}

	useEffect(() => {
		isGameOver()
	}, [alphabet])

	return (
		<>
			{ gameOver !== 'unknown' && <div className={styles.shadow}></div> }
			{ gameOver === 'win' && <GameWin setGameOver={setGameOver} /> }
			{ gameOver === 'lose' && <GameLose setGameOver={setGameOver} /> }
		</>
	)
}

export default GameOver