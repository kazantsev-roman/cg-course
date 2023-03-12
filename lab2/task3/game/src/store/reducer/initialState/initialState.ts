import State from "../../types/State"
import Ball from "../../../types/Ball"

function fillField(): Array<Array<Ball | null>>
{
	const field: Array<Array<Ball | null>> = []

	for(let i = 0; i < 9; ++i)
	{
		const row: Array<Ball | null> = []
		for(let j = 0; j < 9; ++j)
		{
			row.push(null)
		}
		field.push(row)
	}

	return field
}

export function GetInitialState(): State
{
	return {
		canPlay: false,
		nextBalls: [null, null, null],
		field: fillField(),
		moves: [],
		selectedBall: null
	}
}

let initialState = GetInitialState()

export default initialState