import Colors from "../constants/colors"
import Ball from "../../types/Ball"
import Move from "../../types/Move"

type State = {
	canPlay: boolean,
	nextBalls: Array<Colors | null>,
	field: Array<Array<Ball | null>>,
	moves: Array<Move>,
	selectedBall: Ball | null
}

export default State