import styles from "../Cell/Cell.module.css";
import { useState } from "react";
import jump_sound from "../../../../assets/sounds/ball_jump.wav";
import { useSelector } from "react-redux";
import State from "../../../../store/types/State";

type BallProps = {
	color: string,
	viewOnly?: boolean
}

export function Ball({ color, viewOnly }: BallProps)
{
	const canPlay = useSelector((state: State) => state.canPlay)
	const audio = new Audio(jump_sound)
	const [clickedBall, setClickedBall] = useState(false)

	const BallHandleClick = () => {
		if (canPlay && !viewOnly)
		{
			if (!clickedBall)
			{
				audio.play()
				const ball_jump = setInterval(() => {
					audio.play()
				}, 1000)
			}
			setClickedBall(true)
		}
	}


	return (
		<div
			className={clickedBall ? styles.clicked_ball : styles.ball}
			style={{backgroundColor: color}}
			onClick={BallHandleClick}
		>
		</div>
	)
}