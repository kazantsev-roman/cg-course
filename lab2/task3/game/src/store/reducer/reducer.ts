import State from "../types/State";
import { GetInitialState } from "./initialState/initialState";
import Action from "../actions/Action";
import { BLOCK_PLAY } from "../constants/actions";

const initialState = GetInitialState()

const reducer = (state: State =  initialState, action: Action) => {
	switch(action.type)
	{
	case BLOCK_PLAY:
		return {
			...state,
			canPlay: false
		}
	default:
		return state
	}
}

export default reducer