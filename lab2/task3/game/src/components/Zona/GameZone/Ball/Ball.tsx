import styles from "./Ball.module.css"
import { useDispatch, useSelector } from "react-redux"
import State from "../../../../store/types/State"
import setSelectedBall from "../../../../store/actions/SetSelectedBall"
import BallsEqual from "../../../../utils/BallsEqual"
import BallType from "../../../../types/Ball"
import { useEffect, useRef } from "react";
import Direction from "../../../../types/Direction";

type BallProps = {
	ball: BallType,
	viewOnly?: boolean
}

export function Ball({ ball, viewOnly }: BallProps)
{
	const ref = useRef<HTMLDivElement>(null)
	const dispatch = useDispatch()
	const canPlay = useSelector((state: State) => state.canPlay)
	const selectedBall = useSelector((state: State) => state.selectedBall)

	useEffect(() => {
		const element = ref.current

		if (element && ball.removed)
		{
			element.className = styles.removed
		}
	}, [ball])

	useEffect(() => {
		const element = ref.current

		if (element && ball.move)
		{
			console.log('move', ball.move)
			element.classList.remove(styles.clicked_ball)
			if (ball.move == Direction.Up)
			{
				element.className = styles.moveUp
			}
			if (ball.move == Direction.Down)
			{
				element.className = styles.moveDown
			}
			if (ball.move == Direction.Left)
			{
				element.className = styles.moveLeft
			}
			if (ball.move == Direction.Right)
			{
				element.className = styles.moveRight
			}
		}
		setTimeout(() => {
			if (element)
			{
				element.classList.remove(styles.moveUp)
				element.classList.remove(styles.moveDown)
				element.classList.remove(styles.moveLeft)
				element.classList.remove(styles.moveRight)
			}
		}, 500)
	}, [ball.move])

	const BallHandleClick = () => {
		if (canPlay && !viewOnly)
		{
			dispatch(setSelectedBall(ball))
		}
	}

	return (
		<div
			ref={ref}
			className={selectedBall && BallsEqual(ball, selectedBall) ? styles.clicked_ball : styles.ball}
			style={{
				backgroundColor: ball.color,
			}}
			onClick={BallHandleClick}
		>
		</div>
	)
}