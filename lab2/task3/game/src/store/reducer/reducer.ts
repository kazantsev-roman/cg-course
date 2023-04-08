import {
	ADD_BALL,
	ADD_NEXT_BALLS,
	BLOCK_PLAY,
	MOVE_BALL, NEW_GAME, PREPARE_MOVE,
	PREPARE_REMOVED_BALLS, REMOVE_BALLS,
	SET_SELECTED_BALL,
	UNLOCK_PLAY
} from "../constants/actions"
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
			startGame: false,
			canPlay: false
		}
	case ADD_BALL:
		const position = action.ball.position
		const fieldForAdd = [...state.field]
		fieldForAdd[position.y][position.x] = action.ball

		return {
			...state,
			startGame: false,
			field: fieldForAdd,
			numberOfFreeCell: --state.numberOfFreeCell
		}
	case ADD_NEXT_BALLS:
		const color1 = GetColor()
		const color2 = GetColor()
		const color3 = GetColor()

		return {
			...state,
			startGame: false,
			nextBalls: [color1, color2, color3]
		}
	case UNLOCK_PLAY:
		return {
			...state,
			startGame: false,
			canPlay: true
		}
	case SET_SELECTED_BALL:
		return {
			...state,
			startGame: false,
			selectedBall: action.ball
		}
	case PREPARE_MOVE:
		const ball = state.selectedBall
		if (ball === null)
		{
			return state
		}
		const filedForPrepareMove = [...state.field]
		filedForPrepareMove[ball.position.y][ball.position.x] = {
			...ball,
			move: action.direction
		}

		return {
			...state,
			selectedBall: {
				...ball,
				move: action.direction
			},
			field: filedForPrepareMove
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
				startGame: false,
				moves: moves
			}
		}

		const toPosition = action.toPoint
		const fromPosition = state.selectedBall.position

		const filedForMove = [...state.field]
		filedForMove[fromPosition.y][fromPosition.x] = null
		filedForMove[toPosition.y][toPosition.x] = {color: state.selectedBall.color, position: toPosition, removed: false, move: null}

		if (toPosition.x === action.endPosition.x && toPosition.y === action.endPosition.y)
		{
			return {
				...state,
				startGame: false,
				field: filedForMove,
				moves: moves,
				selectedBall: null
			}
		}

		return {
			...state,
			startGame: false,
			field: filedForMove,
			moves: moves,
			selectedBall: {color: state.selectedBall.color, position: toPosition, removed: false, move: null}
		}
	case PREPARE_REMOVED_BALLS:
		const filedForPrepare = [...state.field]

		action.balls.forEach(ball => {
			filedForPrepare[ball.position.y][ball.position.x] = {...ball, removed: true}
		})

		return {
			...state,
			startGame: false,
			field: filedForPrepare
		}
	case REMOVE_BALLS:
		const filedForRemove = [...state.field]

		action.balls.forEach(ball => {
			filedForRemove[ball.position.y][ball.position.x] = null
		})

		return {
			...state,
			startGame: false,
			field: filedForRemove,
			numberOfFreeCell: state.numberOfFreeCell + action.balls.length,
			points: {
				...state.points,
				player: state.points.player + action.points
			}
		}
	case NEW_GAME:
		return GetInitialState()
	default:
		return state
	}
}

export default reducer