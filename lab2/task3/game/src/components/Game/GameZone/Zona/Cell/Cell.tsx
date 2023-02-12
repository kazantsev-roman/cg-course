import styles from "./Cell.module.css"
import steps from "../../../../../assets/images/steps.png"
import { useState } from "react";

type CellProps = {
	width: number,
	height: number,
	color: string,
	ball?: string,
	step?: boolean
}


function Cell({ width, height, color, ball, step }: CellProps)
{
	const [clickedCell, setClickedCell] = useState(false)
	const [clickedBall, setClickedBall] = useState(false)

	const changeStyle = () => {
		!ball && setClickedCell(true)
		ball && setClickedBall(true)
		if (clickedCell)
		{
			setClickedBall(false)
		}
		setTimeout(function(){
			setClickedCell(false)
		}, 1700);
	}

	return (
		<div
			className={clickedCell && !ball && !step ? styles.clicked :styles.wrap}
			style={{width: `${width}px`, height: `${height}px`, backgroundColor: color}}
			onClick={changeStyle}
		>
			{ball ? <div style={{backgroundColor: ball}} className={clickedBall && ball ? styles.clicked_ball : styles.ball}></div> : <></>}
			{step ? <div style={{width: "100%", height: "100%", background: `no-repeat center center url(${steps})`}}></div> : <></>}
		</div>
	)
}

export default Cell