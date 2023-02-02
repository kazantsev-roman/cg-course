import styles from "./Letter.module.css"
import { useDispatch } from "react-redux";
import markLetterAsUsedAction from "../../../store/actions/markLetterAsUsedAction";

type LetterProps = {
	letter: string,
	used: boolean,
	correct: boolean
}

function Letter({letter, used, correct}: LetterProps)
{
	const dispatch = useDispatch()

	function markLetter()
	{
		!used && dispatch(markLetterAsUsedAction(letter))
	}

	return (
		<div
			className={
				used
					? correct
						? `${styles.correct}`
						: `${styles.incorrect}`
					: `${styles.letter}`
			}
			onClick={markLetter}
		>
			{letter}
		</div>
	)
}

export default Letter