import GameState from "../../types/GameState";
import LetterData from "../../types/LetterData";
import { getInitialState, initialState } from "./initialState/initialState";
import { MARK_LETTER_AS_USED, NEW_GAME } from "../constants/constants";
import Action from "../actions/actionType/ActionType";

const reducer = (state: GameState = initialState , action: Action): GameState => {
	const usedLetter = {
		...action.payload as LetterData,
		used: true
	}

	switch(action.type)
	{
	case MARK_LETTER_AS_USED:
		return {
			...state,
			alphabet: state.alphabet.map((letter) => {
				if (usedLetter.letter === letter.letter)
				{
					return usedLetter
				}
				return letter
			}),
			usedLetters: [
				...state.usedLetters,
				usedLetter
			],
			numberOfAttempts: usedLetter.correct ? state.numberOfAttempts : --state.numberOfAttempts
		}
	case NEW_GAME:
		return getInitialState()
	default:
		return state
	}
}

export default reducer