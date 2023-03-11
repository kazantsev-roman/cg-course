import Ball from "../../types/Ball";
import { SET_SELECTED_BALL } from "../constants/actions";

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

type Action = blockPlay | addBall | addNextBalls | unlockPlay | setSelectedBall

export default Action