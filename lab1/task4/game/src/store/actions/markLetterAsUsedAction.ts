import { MARK_LETTER_AS_USED } from "../constants/constants";

function markLetterAsUsed(letter: string)
{
	return {
		type: MARK_LETTER_AS_USED,
		payload: letter
	}
}

export default markLetterAsUsed