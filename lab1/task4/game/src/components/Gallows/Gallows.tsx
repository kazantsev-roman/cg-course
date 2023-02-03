import { useSelector } from "react-redux";
import { GameState } from "../../store/types/GameState";
import styles from "./Gallows.module.css"
import Answer from "../common/Answer/Answer";
import Letter from "../common/Letter/Letter";
import ImageOfGallows from "./ImageOfGallows/ImageOfGallows";
import { useEffect } from "react";

function Gallows()
{

	useEffect(() => {
		document.title = 'Gallows'
	}, [])

	const question = useSelector((state: GameState) => state.question)
	const alphabet = useSelector((state: GameState) => state.alphabet)

	return (
		<>
			<div className={styles.container}>
				<ImageOfGallows />
				<div>
					<div className={styles.question}>{question}</div>
					<div className={styles.answer}>
						<Answer />
					</div>
				</div>
			</div>
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

export default Gallows