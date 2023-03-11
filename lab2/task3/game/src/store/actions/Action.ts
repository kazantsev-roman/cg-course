import Ball from "../../types/Ball";

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

type Action = blockPlay | addBall | addNextBalls | unlockPlay

export default Action