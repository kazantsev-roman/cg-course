import { useSelector } from "react-redux";
import styles from "./Answer.module.css"
import GameState from "../../../store/types/GameState";
import { v4 as uuid } from 'uuid'

function Answer()
{
	const answer = useSelector((state: GameState) => state.answer).toUpperCase()
	const letters = answer.split("")
	const usedLetters = useSelector((state: GameState) => state.alphabet.filter(value => value.used))

	function getLetterData(letter: string)
	{
		return usedLetters.find(value => letter === value.letter)
	}

	return (
		<div className={styles.container}>
			{
				letters.map(letter => {
					const letterData = getLetterData(letter)
					return <div key={uuid()} className={styles.letter_container}>
						<div className={styles.letter}>{letterData?.used && letter}</div>
						<div className={styles.line}></div>
					</div>
				})
			}
		</div>
	)
}

export default Answer