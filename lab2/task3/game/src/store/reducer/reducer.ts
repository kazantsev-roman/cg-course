import State from "../types/State";
import { GetInitialState } from "./initialState/initialState";
import Action from "../actions/Action";
import { ADD_BALL, ADD_NEXT_BALLS, BLOCK_PLAY } from "../constants/actions";
import GetColor from "../../utils/GetColor";

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
	case ADD_NEXT_BALLS:
		const color1 = GetColor()
		const color2 = GetColor()
		const color3 = GetColor()

		return {
			...state,
			nextBalls: [color1, color2, color3]
		}
	default:
		return state
	}
}

export default reducer