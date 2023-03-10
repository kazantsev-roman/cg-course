import { ADD_BALL } from "../constants/actions";
import Ball from "../../types/Ball";

function addBall(ball: Ball)
{
	return {
		type: ADD_BALL,
		payload: ball
	}
}

export default addBall