import Ball from "../types/Ball"
import Colors from "../store/constants/colors"

function MaxDiagonalChain(array: Array<Array<Ball | null>>, color: Colors): Array<Ball>
{
	const maxIndex = array.length - 1

	let diagonalChain: Array<Ball> = []
	let MaxDiagonalChain: Array<Ball> = []

	let aboveDiagonalChain: Array<Ball> = []
	let MaxAboveDiagonalChain: Array<Ball> = []

	let underDiagonalChain: Array<Ball> = []
	let MaxUnderDiagonalChain: Array<Ball> = []

	let invertedDiagonalChain: Array<Ball> = []
	let MaxInvertedDiagonalChain: Array<Ball> = []

	let aboveInvertedDiagonalChain: Array<Ball> = []
	let MaxAboveInvertedDiagonalChain: Array<Ball> = []

	let underInvertedDiagonalChain: Array<Ball> = []
	let MaxUnderInvertedDiagonalChain: Array<Ball> = []

	for (let k = maxIndex; k >= 4; --k)
	{
		for (let y = 0; y <= maxIndex; ++y)
		{
			if (k === maxIndex)
			{
				let item = array[y][y]
				if (item && item.color === color)
				{
					diagonalChain.push({position: item.position, color: color, removed: false})
				}
				else
				{
					if (diagonalChain.length > MaxDiagonalChain.length)
					{
						MaxDiagonalChain = [...diagonalChain]
					}
					diagonalChain = []
				}

				if (y === 8 && diagonalChain.length > MaxDiagonalChain.length)
				{
					MaxDiagonalChain = [...diagonalChain]
				}

				item = array[maxIndex - y][y]
				if (item && item.color === color)
				{
					invertedDiagonalChain.push({position: item.position, color: color, removed: false})
				}
				else
				{
					if (invertedDiagonalChain.length > MaxInvertedDiagonalChain.length)
					{
						MaxInvertedDiagonalChain = [...invertedDiagonalChain]
					}
					invertedDiagonalChain = []
				}

				if (y === maxIndex && invertedDiagonalChain.length > MaxInvertedDiagonalChain.length)
				{
					MaxInvertedDiagonalChain = [...invertedDiagonalChain]
				}
			}

			if (y < k)
			{
				let item = array[y][array.length - k + y]
				if (item && item.color === color)
				{
					aboveDiagonalChain.push({position: item.position, color: color, removed: false})
				}
				else
				{
					if (aboveDiagonalChain.length > MaxAboveDiagonalChain.length)
					{
						MaxAboveDiagonalChain = [...aboveDiagonalChain]
					}
					aboveDiagonalChain = []
				}

				if (y === 8 && aboveDiagonalChain.length > MaxAboveDiagonalChain.length)
				{
					MaxAboveDiagonalChain = [...aboveDiagonalChain]
				}

				item = array[array.length - k + y][y]
				if (item && item.color === color)
				{
					underDiagonalChain.push({position: item.position, color: color, removed: false})
				}
				else
				{
					if (underDiagonalChain.length > MaxUnderDiagonalChain.length)
					{
						MaxUnderDiagonalChain = [...underDiagonalChain]
					}
					underDiagonalChain = []
				}

				if (y === 8 && underDiagonalChain.length > MaxUnderDiagonalChain.length)
				{
					MaxUnderDiagonalChain = [...underDiagonalChain]
				}

				item = array[y][maxIndex - y - array.length + k]
				if (item && item.color === color)
				{
					aboveInvertedDiagonalChain.push({position: item.position, color: color, removed: false})
				}
				else
				{
					if (aboveInvertedDiagonalChain.length > MaxAboveInvertedDiagonalChain.length)
					{
						MaxAboveInvertedDiagonalChain = [...aboveInvertedDiagonalChain]
					}
					aboveInvertedDiagonalChain = []
				}

				if (y === 8 && aboveInvertedDiagonalChain.length > MaxAboveInvertedDiagonalChain.length)
				{
					MaxAboveInvertedDiagonalChain = [...aboveInvertedDiagonalChain]
				}

				item = array[y + array.length - k][maxIndex - y]
				if (item && item.color === color)
				{
					underInvertedDiagonalChain.push({position: item.position, color: color, removed: false})
				}
				else
				{
					if (underInvertedDiagonalChain.length > MaxUnderInvertedDiagonalChain.length)
					{
						MaxUnderInvertedDiagonalChain = [...underInvertedDiagonalChain]
					}
					underInvertedDiagonalChain = []
				}

				if (y === 8 && underInvertedDiagonalChain.length > MaxUnderInvertedDiagonalChain.length)
				{
					MaxUnderInvertedDiagonalChain = [...underInvertedDiagonalChain]
				}
			}

		}
	}

	if (
		MaxDiagonalChain.length >= 5 &&
		MaxDiagonalChain.length > MaxAboveDiagonalChain.length &&
		MaxDiagonalChain.length > MaxUnderDiagonalChain.length &&
		MaxDiagonalChain.length > MaxInvertedDiagonalChain.length &&
		MaxDiagonalChain.length > MaxAboveInvertedDiagonalChain.length &&
		MaxDiagonalChain.length > MaxUnderInvertedDiagonalChain.length
	)
	{
		return MaxDiagonalChain
	}
	if (
		MaxAboveDiagonalChain.length >= 5 &&
		MaxAboveDiagonalChain.length > MaxUnderDiagonalChain.length &&
		MaxAboveDiagonalChain.length > MaxInvertedDiagonalChain.length &&
		MaxAboveDiagonalChain.length > MaxAboveInvertedDiagonalChain.length &&
		MaxAboveDiagonalChain.length > MaxUnderInvertedDiagonalChain.length
	)
	{
		return MaxAboveDiagonalChain
	}
	if (
		MaxUnderDiagonalChain.length >= 5 &&
		MaxUnderDiagonalChain.length > MaxInvertedDiagonalChain.length &&
		MaxUnderDiagonalChain.length > MaxAboveInvertedDiagonalChain.length &&
		MaxUnderDiagonalChain.length > MaxUnderInvertedDiagonalChain.length
	)
	{
		return MaxUnderDiagonalChain
	}
	if (
		MaxInvertedDiagonalChain.length >= 5 &&
		MaxInvertedDiagonalChain.length > MaxAboveInvertedDiagonalChain.length &&
		MaxInvertedDiagonalChain.length > MaxUnderInvertedDiagonalChain.length
	)
	{
		return MaxInvertedDiagonalChain
	}
	if (
		MaxAboveInvertedDiagonalChain.length >= 5 &&
		MaxAboveInvertedDiagonalChain.length > MaxUnderInvertedDiagonalChain.length
	)
	{
		return MaxAboveInvertedDiagonalChain
	}
	if (MaxUnderInvertedDiagonalChain.length >= 5)
	{
		return MaxUnderInvertedDiagonalChain
	}

	return []
}

export default MaxDiagonalChain