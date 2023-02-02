import GameState from "../types/GameState";
import { getInitialState, initialState } from "../initialState/initialState";
import { MARK_LETTER_AS_USED, NEW_GAME } from "../constants/constants";
import Action from "../types/ActionType";

const reducer = (state: GameState = initialState , action: Action) => {
	switch(action.type)
	{
	case MARK_LETTER_AS_USED:
		let isCorrect = false
		return {
			...state,
			alphabet: state.alphabet.map(letter => {
				if (action.payload === letter.letter)
				{
					isCorrect = letter.correct
					return {
						...letter,
						used: true
					}
				}
				return letter
			}),
			numberOfAttempts: isCorrect ? state.numberOfAttempts : --state.numberOfAttempts
		}
	case NEW_GAME:
		return getInitialState()
	default:
		return state
	}
}

export default reducer