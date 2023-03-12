import { ADD_BALL, ADD_NEXT_BALLS, BLOCK_PLAY, MOVE_BALL, SET_SELECTED_BALL, UNLOCK_PLAY } from "../constants/actions"
import { GetInitialState } from "./initialState/initialState"
import State from "../types/State"
import Action from "../types/Action"
import GetColor from "../../utils/GetColor"

const initialState = GetInitialState()

const reducer = (state: State = initialState, action: Action): State => {
	switch(action.type)
	{
	case BLOCK_PLAY:
		return {
			...state,
			canPlay: false
		}
	case ADD_BALL:
		const position = action.ball.position
		const newFiled = [...state.field]
		newFiled[position.y][position.x] = action.ball

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
	case UNLOCK_PLAY:
		return {
			...state,
			canPlay: true
		}
	case SET_SELECTED_BALL:
		return {
			...state,
			selectedBall: action.ball
		}
	case MOVE_BALL:
		if (state.selectedBall === null)
		{
			return state
		}

		const moves = action.moves

		if (moves.length === 0)
		{
			return {
				...state,
				moves: moves
			}
		}

		const toPosition = action.toPoint
		const fromPosition = state.selectedBall.position

		const filed = [...state.field]
		filed[fromPosition.y][fromPosition.x] = null
		filed[toPosition.y][toPosition.x] = {color: state.selectedBall.color, position: toPosition}

		return {
			...state,
			field: filed,
			moves: moves,
			selectedBall: null
		}

	default:
		return state
	}
}

export default reducer