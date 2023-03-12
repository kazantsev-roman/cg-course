import styles from "./Cell.module.css"
import { useState } from "react";
import { Ball as BallComponent } from "../Ball/Ball";
import Ball from "../../../../types/Ball"
import { Step } from "../Step/Step";
import { useDispatch, useSelector } from "react-redux";
import State from "../../../../store/types/State";
import moveBall from "../../../../store/actions/MoveBall";
import addBall from "../../../../store/actions/AddBall";
import GetFreeCell from "../../../../utils/GetFreeCell";
import addNextBalls from "../../../../store/actions/AddNextBalls";
import blockPlay from "../../../../store/actions/BlockPlay";
import unlockPlay from "../../../../store/actions/UnlockPlay";
import GetShortestPath from "../../../../utils/GetShortestPath";
import GetMoves from "../../../../utils/GetMoves";
import Point from "../../../../types/Point";
import Move from "../../../../types/Move";

type CellProps = {
	width: number,
	height: number,
	color: string,
	x?: number,
	y?: number,
	ball?: Ball | null,
	step?: boolean,
	viewOnly?: boolean
}


function Cell({x, y, width, height, color, ball, step, viewOnly = false}: CellProps)
{
	const dispatch = useDispatch()
	const state = useSelector((state: State) => state)

	const [clickedCell, setClickedCell] = useState(false)

	const getMoves = (fromPoint: Point, toPoint: Point) => {
		return new Promise((resolve) =>
		{
			if(state.selectedBall)
			{
				const shortedPath = GetShortestPath(state.field, fromPoint, toPoint)
				const moves = GetMoves(shortedPath)
				resolve(moves)
			}
		})
	}

	const CellHandleClick = async () => {
		if(!viewOnly && !ball)
		{
			setClickedCell(true)
			if(state.selectedBall && x !== undefined && y !== undefined)
			{
				getMoves(state.selectedBall.position, {x, y}).then(moves => {
					dispatch(blockPlay())
					dispatch(moveBall({x, y}, moves as Array<Move>))

					if((moves as Array<Move>).length > 0)
					{
						let counter = 0
						const addBalls = setInterval(() =>
						{
							const color = state.nextBalls[counter]
							const position = GetFreeCell(state.field)

							color && dispatch(addBall({position, color}))

							++counter
						}, 500)

						setTimeout(() =>
						{
							dispatch(addNextBalls())
							clearInterval(addBalls)
							dispatch(unlockPlay())
						}, 1500)
					}
					else
					{
						dispatch(unlockPlay())
					}
				})
			}

			setTimeout(function ()
			{
				setClickedCell(false)
			}, 1700);
		}
	}

	return (
		<div
			className={(clickedCell && !ball && !step) ? styles.clicked : styles.wrap}
			style={{
				width: `${width}px`,
				height: `${height}px`,
				backgroundColor: color,
				cursor: state.canPlay ? "pointer" : "none"
			}}
			onClick={CellHandleClick}
		>
			{ball && <BallComponent ball={ball} viewOnly={viewOnly}/>}
			{step && <Step/>}
		</div>
	)
}

export default Cell