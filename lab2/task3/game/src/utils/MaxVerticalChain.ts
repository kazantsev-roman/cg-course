import Ball from "../types/Ball"
import Colors from "../store/constants/colors"
import Point from "../types/Point"

function MaxVerticalChain(array: Array<Array<Ball | null>>, color: Colors): Array<Point>
{
	let maxChain: Array<Point> = []

	for (let i = 0; i < 9; ++i)
	{
		let chain: Array<Point> = []
		for (let j = 0; j < 9; ++j)
		{
			let item = array[j][i]
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

			item = array[8][i]
			if (item && item.color === color && chain.length > maxChain.length)
			{
				maxChain = [...chain]
			}
		}
	}

	return maxChain.length >= 5 ? maxChain : []
}

export default MaxVerticalChain