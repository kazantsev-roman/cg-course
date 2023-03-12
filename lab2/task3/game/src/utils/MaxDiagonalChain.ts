import Ball from "../types/Ball"
import Colors from "../store/constants/colors"
import Point from "../types/Point"

function MaxDiagonalChain(array: Array<Array<Ball | null>>, color: Colors): Array<Point>
{
	let maxChain: Array<Point> = []
	let chain: Array<Point> = []

	for (let i = 0; i < 9; ++i)
	{
		const item = array[i][i]
		if (item && item.color === color)
		{
			chain.push(item.position)
		}
		else
		{
			if (chain.length > maxChain.length)
			{
				maxChain = [...chain]
			}
			chain = []
		}
	}

	const item = array[8][8]
	if (item && item.color === color && chain.length > maxChain.length)
	{
		maxChain = [...chain]
	}

	return maxChain.length >= 5 ? maxChain : []
}

export default MaxDiagonalChain