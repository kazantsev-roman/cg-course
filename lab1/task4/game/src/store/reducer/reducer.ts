import GameState from "../../types/GameState";
import LetterData from "../../types/LetterData";
import { getInitialState, initialState } from "./initialState/initialState";
import { MARK_LETTER_AS_USED, NEW_GAME } from "../constants/constants";
import Action from "../actions/actionType/ActionType";

const reducer = (state: GameState = initialState , action: Action): GameState => {
	switch(action.type)
	{
	case MARK_LETTER_AS_USED:
		return {
			...state,
			alphabet: state.alphabet.map((letter) => {
				if ((action.payload as LetterData).letter === letter.letter)
				{
					return {
						...letter,
						used: true
					}
				}
				return letter
			}),
			usedLetters: [
				...state.usedLetters,
				{
					...action.payload as LetterData,
					used: true
				}
			],
			numberOfAttempts: (action.payload as LetterData).correct ? state.numberOfAttempts : --state.numberOfAttempts
		}
	case NEW_GAME:
		return getInitialState()
	default:
		return state
	}
}

export default reducer