import Ball from "../types/Ball"
import Point from "../types/Point"

function GetShortestPath(array: Array<Array<Ball | null>>, startPosition: Point, endPosition: Point): number
{
	const arrayWithBorders: Array<Array<number>> = []
	for (let y = 0; y <= array.length + 1; ++y)
	{
		const row: Array<number> = []
		for (let x = 0; x <= array.length + 1; ++x)
		{
			if (y === 0 || x === 0 || x === array.length + 1 || y === array.length + 1)
			{
				row.push(-1)
				continue
			}
			if (array[y - 1][x - 1] === null)
			{
				row.push(0)
				continue
			}

			row.push(-1)
		}

		arrayWithBorders.push(row)
	}

	const queue: Array<Point> = [{x: startPosition.x + 1, y: startPosition.y + 1}]
	arrayWithBorders[startPosition.y + 1][startPosition.x + 1] = 0

	while (queue.length)
	{
		const current = queue.shift()
		if (current === undefined)
		{
			continue
		}

		if (arrayWithBorders[current.y][current.x + 1] === 0)
		{
			arrayWithBorders[current.y][current.x + 1] = arrayWithBorders[current.y][current.x] + 1
			queue.push({x: current.x + 1, y: current.y})
		}
		if (arrayWithBorders[current.y][current.x - 1] === 0)
		{
			arrayWithBorders[current.y][current.x - 1] = arrayWithBorders[current.y][current.x] + 1
			queue.push({x: current.x - 1, y: current.y})
		}
		if (arrayWithBorders[current.y + 1][current.x] === 0)
		{
			arrayWithBorders[current.y + 1][current.x] = arrayWithBorders[current.y][current.x] + 1
			queue.push({x: current.x, y: current.y + 1})
		}
		if (arrayWithBorders[current.y - 1][current.x] === 0)
		{
			arrayWithBorders[current.y - 1][current.x] = arrayWithBorders[current.y][current.x] + 1
			queue.push({x: current.x, y: current.y - 1})
		}
	}

	return arrayWithBorders[endPosition.y + 1][endPosition.x + 1]
}

export default GetShortestPath