import { REMOVE_BALLS } from "../constants/actions"
import Ball from "../../types/Ball"

function setSelectedBall(balls: Array<Ball>)
{
	return {
		type: REMOVE_BALLS,
		balls: balls
	}
}

export default setSelectedBall