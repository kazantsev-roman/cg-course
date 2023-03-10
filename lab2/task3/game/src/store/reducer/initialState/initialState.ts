import Ball from "../../../types/Ball";

function Random()
{
	let randomX1 = Math.floor(Math.random() * 9)
	let randomY1 = Math.floor(Math.random() * 9)

	let randomX2 = Math.floor(Math.random() * 9)
	let randomY2 = Math.floor(Math.random() * 9)

	let randomX3 = Math.floor(Math.random() * 9)
	let randomY3 = Math.floor(Math.random() * 9)

	return [
		{x: randomX1, y: randomY1},
		{x: randomX2, y: randomY2},
		{x: randomX3, y: randomY3}
	]
}

export function GetInitialState()
{
	Random()
	let balls: Array<Array<Ball | null>> = []

	for (let y = 0; y < 9; ++y)
	{
		let row: Array<Ball | null> = []

		for (let x = 0; x < 9; ++x)
		{
			if (x == 2 && y == 1)
			{
				row.push({color: ""})
				continue
			}
			if (x == 3 && y == 1)
			{
				row.push({color: ""})
				continue
			}
			if (x == 4 && y == 1)
			{
				row.push({color: ""})
				continue
			}
			if (x == 5 && y == 1)
			{
				row.push({color: ""})
				continue
			}

			if (x == 2 && y == 2)
			{
				row.push({color: ""})
				continue
			}
			if (x == 3 && y == 2)
			{
				row.push({color: ""})
				continue
			}
			if (x == 5 && y == 2)
			{
				row.push({color: ""})
				continue
			}

			if (x == 5 && y == 3)
			{
				row.push({color: ""})
				continue
			}

			if (x == 0 && y == 4)
			{
				row.push({color: ""})
				continue
			}
			if (x == 1 && y == 4)
			{
				row.push({color: ""})
				continue
			}
			if (x == 2 && y == 4)
			{
				row.push({color: ""})
				continue
			}
			if (x == 3 && y == 4)
			{
				row.push({color: ""})
				continue
			}
			if (x == 4 && y == 4)
			{
				row.push({color: ""})
				continue
			}
			if (x == 5 && y == 4)
			{
				row.push({color: ""})
				continue
			}

			if (x == 2 && y == 5)
			{
				row.push({color: ""})
				continue
			}

			if (x == 1 && y == 6)
			{
				row.push({color: ""})
				continue
			}
			if (x == 2 && y == 6)
			{
				row.push({color: ""})
				continue
			}

			row.push(null)
		}

		balls.push(row)
	}

	return balls
}

let initialState: Array<Array<Ball | null>> = GetInitialState()

export default initialState