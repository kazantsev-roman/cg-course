import Ball from "../types/Ball"

function BallsEqual(ball1: Ball, ball2: Ball): boolean
{
	return ball1.color === ball2.color && ball1.position.x === ball2.position.x && ball1.position.y === ball2.position.y
}

export default BallsEqual