import { SET_SELECTED_BALL } from "../constants/actions";
import Ball from "../../types/Ball";

function setSelectedBall(ball: Ball)
{
	return {
		type: SET_SELECTED_BALL,
		payload: ball
	}
}

export default setSelectedBall