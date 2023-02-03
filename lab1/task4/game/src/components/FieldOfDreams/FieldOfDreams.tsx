import { useSelector } from "react-redux";
import { GameState } from "../../types/GameState";
import Letter from "../common/Letter/Letter";
import styles from "./FieldOfDreams.module.css"
import Answer from "../common/Answer/Answer";
import { useEffect } from "react";

function FieldOfDreams()
{
	useEffect(() => {
		document.title = 'Field of Dreams'
	}, [])

	const question = useSelector((state: GameState) => state.question)
	const usedLetters = useSelector((state: GameState) => state.usedLetters)
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