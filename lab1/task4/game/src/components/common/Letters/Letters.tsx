import Letter from "./Letter/Letter";
import LetterData from "../../../types/LetterData";

type LettersProps = {
	array: Array<LetterData>
}

function Letters({ array }: LettersProps)
{
	return (
		<>
			{
				array.map((letter) => {
					return <Letter
						key={letter.letter}
						letter={letter.letter}
						used={letter.used}
						correct={letter.correct}
					/>
				})
			}
		</>
	)
}

export default Letters