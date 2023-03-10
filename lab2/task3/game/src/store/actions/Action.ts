import Ball from "../../types/Ball";

type blockPlay = {
	type: "BLOCK_PLAY",
	payload: {}
}

type addBall = {
	type: "ADD_BALL",
	payload: Ball
}

type Action = blockPlay | addBall

export default Action