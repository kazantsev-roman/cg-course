import styles from "./Cell.module.css"
import steps from "../../../../../assets/images/steps.png"

type CellProps = {
	width: number,
	height: number,
	color: string,
	ball?: string,
	step?: boolean
}


function Cell({ width, height, color, ball, step }: CellProps)
{
	return (
		<div className={styles.wrap} style={{width: `${width}px`, height: `${height}px`, backgroundColor: color}}>
			{ball ? <div style={{backgroundColor: ball}} className={styles.ball}></div> : <></>}
			{step ? <div style={{width: "100%", height: "100%", background: `no-repeat center center url(${steps})`}}></div> : <></>}
		</div>
	)
}

export default Cell