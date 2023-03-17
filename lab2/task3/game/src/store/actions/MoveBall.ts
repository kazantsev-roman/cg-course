import { MOVE_BALL } from "../constants/actions"
import Point from "../../types/Point"
import Move from "../../types/Move"

function moveBall(position: Point, endPosition: Point, moves: Array<Move>)
{
	return {
		type: MOVE_BALL,
		toPoint: position,
		endPosition: endPosition,
		moves: moves
	}
}

export default moveBall