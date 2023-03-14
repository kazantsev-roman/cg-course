import Colors from "../constants/colors"
import Ball from "../../types/Ball"
import Move from "../../types/Move"

type State = {
	canPlay: boolean,
	nextBalls: Array<Colors | null>,
	field: Array<Array<Ball | null>>,
	numberOfFreeCell: number,
	moves: Array<Move>,
	selectedBall: Ball | null,
	points: {
		king: number,
		player: number
	}
}

export default State