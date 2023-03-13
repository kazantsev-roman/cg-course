import styles from "./Ball.module.css"
import { useDispatch, useSelector } from "react-redux"
import State from "../../../../store/types/State"
import setSelectedBall from "../../../../store/actions/SetSelectedBall"
import BallsEqual from "../../../../utils/BallsEqual"
import BallType from "../../../../types/Ball"
import { useEffect, useRef } from "react";

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
			style={{backgroundColor: ball.color}}
			onClick={BallHandleClick}
		>
		</div>
	)
}