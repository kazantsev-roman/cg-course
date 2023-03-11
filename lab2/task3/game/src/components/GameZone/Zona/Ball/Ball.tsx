import styles from "../Cell/Cell.module.css";
import { useDispatch, useSelector } from "react-redux";
import State from "../../../../store/types/State";
import setSelectedBall from "../../../../store/actions/SetSelectedBall";
import BallType from "../../../../types/Ball"
import BallsEqual from "../../../../utils/BallsEqual";

type BallProps = {
	ball: BallType,
	viewOnly?: boolean
}

export function Ball({ ball, viewOnly }: BallProps)
{
	const dispatch = useDispatch()
	const canPlay = useSelector((state: State) => state.canPlay)
	const selectedBall = useSelector((state: State) => state.selectedBall)

	const BallHandleClick = () => {
		if (canPlay && !viewOnly)
		{
			dispatch(setSelectedBall(ball))
		}
	}

	return (
		<div
			className={selectedBall && BallsEqual(ball, selectedBall) ? styles.clicked_ball : styles.ball}
			style={{backgroundColor: ball.color}}
			onClick={BallHandleClick}
		>
		</div>
	)
}