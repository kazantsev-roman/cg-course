import { useSelector } from "react-redux";
import GameState  from "../../types/GameState";
import styles from "./FieldOfDreams.module.css"
import Answer from "../common/Answer/Answer";
import { useEffect } from "react";
import Letters from "../common/Letters/Letters";

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
				<Letters array={usedLetters} />
			</div>
			<div className={styles.header}>Осталось попыток: {numberOfAttempts}</div>
			<div className={styles.alphabet}>
				<Letters array={alphabet} />
			</div>
		</>
	)
}

export default FieldOfDreams