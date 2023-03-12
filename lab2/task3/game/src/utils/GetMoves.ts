import Direction from "../types/Direction"
import Point from "../types/Point"
import Move from "../types/Move"

function GetMoves(array: Array<Point>): Array<Move>
{
	const moves: Array<Move> = []
	let firstMove = array[0]

	for(let i = 1; i < array.length; ++i)
	{
		let secondMove = array[i]

		if (firstMove.x > secondMove.x)
		{
			moves.push({position: secondMove, direction: Direction.Left})
		}
		if (firstMove.x < secondMove.x)
		{
			moves.push({position: secondMove, direction: Direction.Right})
		}
		if (firstMove.y > secondMove.y)
		{
			moves.push({position: secondMove, direction: Direction.Up})
		}
		if (firstMove.y < secondMove.y)
		{
			moves.push({position: secondMove, direction: Direction.Down})
		}

		firstMove = secondMove
	}

	return moves
}

export default GetMoves