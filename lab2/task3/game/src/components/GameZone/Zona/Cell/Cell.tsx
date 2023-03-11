import styles from "./Cell.module.css"
import { useState } from "react";
import { Ball } from "../Ball/Ball";
import { Step } from "../Step/Step";

type CellProps = {
	width: number,
	height: number,
	color: string,
	ball?: string | null,
	step?: boolean
}


function Cell({ width, height, color, ball, step }: CellProps)
{
	const [clickedCell, setClickedCell] = useState(false)

	const CellHandleClick = () => {
		!ball && setClickedCell(true)
		setTimeout(function(){
			setClickedCell(false)
		}, 1700);
	}

	return (
		<div
			className={clickedCell && !ball && !step ? styles.clicked :styles.wrap}
			style={{width: `${width}px`, height: `${height}px`, backgroundColor: color}}
			onClick={CellHandleClick}
		>
			{ball && <Ball color={ball} />}
			{step && <Step />}
		</div>
	)
}

export default Cell