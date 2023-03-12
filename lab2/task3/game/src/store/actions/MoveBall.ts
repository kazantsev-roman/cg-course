import { MOVE_BALL } from "../constants/actions";
import Point from "../../types/Point";
import Move from "../../types/Move";

function moveBall(position: Point, moves: Array<Move>)
{
	return {
		type: MOVE_BALL,
		payload: {
			to: position,
			moves: moves
		}
	}
}

export default moveBall