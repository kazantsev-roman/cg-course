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
		startGame: true,
		canPlay: false,
		nextBalls: [null, null, null],
		field: fillField(),
		numberOfFreeCell: 9 * 9,
		moves: [],
		selectedBall: null,
		points: {
			king: 400,
			player: 0
		}
	}
}

let initialState = GetInitialState()

export default initialState