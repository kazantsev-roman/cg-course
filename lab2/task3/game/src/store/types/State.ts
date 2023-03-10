import Ball from "../../types/Ball";
import Move from "../../types/Move";
import Point from "../../types/Point";

type State = {
	canPlay: boolean,
	nextBalls: Array<Ball>,
	field: Array<Array<Ball | null>>,
	shortedPath: Array<Move>,
	selectedBall: Ball | null,
	selectedPoint: Point | null
}

export default State