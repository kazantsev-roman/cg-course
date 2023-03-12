import Ball from "../../types/Ball";
import { SET_SELECTED_BALL } from "../constants/actions";
import Point from "../../types/Point";
import Move from "../../types/Move";

type blockPlay = {
	type: "BLOCK_PLAY",
	payload: {}
}

type addBall = {
	type: "ADD_BALL",
	payload: Ball
}

type addNextBalls = {
	type: "ADD_NEXT_BALLS",
	payload: {}
}

type unlockPlay = {
	type: "UNLOCK_PLAY",
	payload: {}
}
type setSelectedBall = {
	type: "SET_SELECTED_BALL",
	payload: Ball
}

type MoveBall = {
	type: "MOVE_BALL",
	payload: {
		to: Point,
		moves: Array<Move>
	}
}

type Action = blockPlay | addBall | addNextBalls | unlockPlay | setSelectedBall | MoveBall

export default Action