import Ball from "../../types/Ball";
import { SET_SELECTED_BALL } from "../constants/actions";
import Point from "../../types/Point";
import Move from "../../types/Move";

type blockPlay = {
	type: "BLOCK_PLAY"
}

type addBall = {
	type: "ADD_BALL",
	ball: Ball
}

type addNextBalls = {
	type: "ADD_NEXT_BALLS"
}

type unlockPlay = {
	type: "UNLOCK_PLAY"
}
type setSelectedBall = {
	type: "SET_SELECTED_BALL",
	ball: Ball | null
}

type MoveBall = {
	type: "MOVE_BALL",
	toPoint: Point,
	moves: Array<Move>
}

type Action = blockPlay | addBall | addNextBalls | unlockPlay | setSelectedBall | MoveBall

export default Action