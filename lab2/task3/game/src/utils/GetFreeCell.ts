import Ball from "../types/Ball";
import Point from "../types/Point";

function GetFreeCell(array: Array<Array<Ball | null>>): Point
{
	let randomIndexX = Math.floor(Math.random() * array.length)
	let randomIndexY = Math.floor(Math.random() * array.length)
	while(array[randomIndexY][randomIndexX] !== null)
	{
		randomIndexX = Math.floor(Math.random() * array.length)
		randomIndexY = Math.floor(Math.random() * array.length)
	}

	return {x: randomIndexX, y: randomIndexY}
}

export default GetFreeCell