import { REMOVE_BALLS } from "../constants/actions"
import Ball from "../../types/Ball"

function setSelectedBall(balls: Array<Ball>, points: number)
{
	return {
		type: REMOVE_BALLS,
		balls: balls,
		points: points
	}
}

export default setSelectedBall