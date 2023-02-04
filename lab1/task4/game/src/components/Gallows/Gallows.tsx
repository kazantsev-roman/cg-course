import { useSelector } from "react-redux";
import GameState  from "../../types/GameState";
import styles from "./Gallows.module.css"
import Answer from "../common/Answer/Answer";
import ImageOfGallows from "./ImageOfGallows/ImageOfGallows";
import { useEffect } from "react";
import Letters from "../common/Letters/Letters";

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
				<Letters array={alphabet} />
			</div>
		</>
	)
}

export default Gallows