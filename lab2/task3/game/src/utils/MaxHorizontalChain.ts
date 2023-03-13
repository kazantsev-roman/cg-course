import Ball from "../types/Ball"
import Colors from "../store/constants/colors"

function MaxHorizontalChain(array: Array<Array<Ball | null>>, color: Colors): Array<Ball>
{
	let maxChain: Array<Ball> = []

	for (let i = 0; i < 9; ++i)
	{
		let chain: Array<Ball> = []
		for (let j = 0; j < 9; ++j)
		{
			let item = array[i][j]
			if (item && item.color === color)
			{
				chain.push({position: item.position, color: color, removed: false})
			}
			else
			{
				if (chain.length > maxChain.length)
				{
					maxChain = [...chain]
				}
				chain = []
			}

			item = array[i][8]
			if (item && item.color === color && chain.length > maxChain.length)
			{
				maxChain = [...chain]
			}
		}
	}

	return maxChain.length >= 5 ? maxChain : []
}

export default MaxHorizontalChain