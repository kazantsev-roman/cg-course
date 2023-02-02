import GameState from "../types/GameState";
import { getInitialState, initialState } from "../initialState/initialState";
import { MARK_LETTER_AS_USED, NEW_GAME } from "../constants/constants";
import Action from "../types/ActionType";

const reducer = (state: GameState = initialState , action: Action) => {
	// TODO: добавить функцию по изменению состояния буквы
	switch(action.type)
	{
	case MARK_LETTER_AS_USED:
		return {
			...state,
			alphabet: [
				...state.alphabet,

			]
		}
	case NEW_GAME:
		return getInitialState()
	default:
		return state
	}
}

export default reducer