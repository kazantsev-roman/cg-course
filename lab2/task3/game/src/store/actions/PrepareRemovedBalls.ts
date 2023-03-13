import { PREPARE_REMOVED_BALLS } from "../constants/actions"
import Ball from "../../types/Ball"

function prepareRemovedBalls(balls: Array<Ball>)
{
	return {
		type: PREPARE_REMOVED_BALLS,
		balls: balls
	}
}

export default prepareRemovedBalls