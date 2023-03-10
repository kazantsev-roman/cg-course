import State from "../../types/State";

export function GetInitialState(): State
{
	return {
		canPlay: false,
		nextBalls: [],
		field:  [],
		shortedPath: [],
		selectedBall: null,
		selectedPoint: null
	}
}

let initialState = GetInitialState()

export default initialState