import styles from "./Cell.module.css"
import { useState } from "react";
import { Ball as BallComponent } from "../Ball/Ball";
import Ball from "../../../../types/Ball"
import { Step } from "../Step/Step";
import { useSelector } from "react-redux";
import State from "../../../../store/types/State";

type CellProps = {
	width: number,
	height: number,
	color: string,
	ball?: Ball | null,
	step?: boolean,
	viewOnly?: boolean
}


function Cell({ width, height, color, ball, step, viewOnly = false }: CellProps)
{
	const canPlay = useSelector((state: State) => state.canPlay)

	const [clickedCell, setClickedCell] = useState(false)

	const CellHandleClick = () => {
		if (!viewOnly)
		{
			!ball && setClickedCell(true)
			setTimeout(function(){
				setClickedCell(false)
			}, 1700);
		}
	}

	return (
		<div
			className={(clickedCell && !ball && !step) ? styles.clicked : styles.wrap}
			style={{width: `${width}px`, height: `${height}px`, backgroundColor: color, cursor: canPlay ? "pointer" : "none"}}
			onClick={CellHandleClick}
		>
			{ball && <BallComponent ball={ball} viewOnly={viewOnly} />}
			{step && <Step />}
		</div>
	)
}

export default Cell