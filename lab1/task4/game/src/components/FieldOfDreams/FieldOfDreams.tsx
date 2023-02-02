import { useSelector } from "react-redux";
import GameState from "../../store/types/GameState";
import Letter from "./Letter/Letter";
import styles from "./FieldOfDreams.module.css"
import Answer from "./Answer/Answer";

function FieldOfDreams()
{
	const question = useSelector((state: GameState) => state.question)
	const usedLetters = useSelector((state: GameState) => state.alphabet.filter(value => value.used))
	const numberOfAttempts = useSelector((state: GameState) => state.numberOfAttempts)
	const alphabet = useSelector((state: GameState) => state.alphabet)

	return (
		<>
			<div className={styles.header}>Вопрос:</div>
			<div className={styles.question}>{question}</div>
			<Answer />
			<div className={styles.header}>Использованные буквы:</div>
			<div className={styles.used}>
				{
					usedLetters.map(letter => {
						return <Letter
							key={letter.letter}
							letter={letter.letter}
							used={letter.used}
							correct={letter.correct}
						/>
					})
				}
			</div>
			<div className={styles.header}>Осталось попыток: {numberOfAttempts}</div>
			<div className={styles.alphabet}>
				{
					alphabet.map(letter => {
						return <Letter
							key={letter.letter}
							letter={letter.letter}
							used={letter.used}
							correct={letter.correct}
						/>
					})
				}
			</div>
		</>
	)
}

export default FieldOfDreams