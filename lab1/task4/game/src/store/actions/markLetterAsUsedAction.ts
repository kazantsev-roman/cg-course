import { MARK_LETTER_AS_USED } from "../constants/constants";
import LetterData  from "../../types/LetterData";

function markLetterAsUsed(letter: LetterData)
{
	return {
		type: MARK_LETTER_AS_USED,
		payload: letter
	}
}

export default markLetterAsUsed