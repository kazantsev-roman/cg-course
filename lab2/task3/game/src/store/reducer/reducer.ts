import State from "../types/State";
import { GetInitialState } from "./initialState/initialState";
import Action from "../actions/Action";
import { ADD_BALL, BLOCK_PLAY } from "../constants/actions";

const initialState = GetInitialState()

const reducer = (state: State =  initialState, action: Action) => {
	switch(action.type)
	{
	case BLOCK_PLAY:
		return {
			...state,
			canPlay: false
		}
	case ADD_BALL:
		const position = action.payload.position
		const newFiled = [...state.field]
		newFiled[position.y][position.x] = action.payload
		return {
			...state,
			field: newFiled
		}
	default:
		return state
	}
}

export default reducer