import { SET_SELECTED_BALL } from "../constants/actions"
import Ball from "../../types/Ball"

function setSelectedBall(ball: Ball | null)
{
	return {
		type: SET_SELECTED_BALL,
		ball: ball
	}
}

export default setSelectedBall