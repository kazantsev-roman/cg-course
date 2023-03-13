import Ball from "../types/Ball"
import Colors from "../store/constants/colors"

function MaxDiagonalChain(array: Array<Array<Ball | null>>, color: Colors): Array<Ball>
{
	let maxChain: Array<Ball> = []
	let chain: Array<Ball> = []

	for (let i = 0; i < 9; ++i)
	{
		const item = array[i][i]
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
	}

	const item = array[8][8]
	if (item && item.color === color && chain.length > maxChain.length)
	{
		maxChain = [...chain]
	}

	return maxChain.length >= 5 ? maxChain : []
}

export default MaxDiagonalChain