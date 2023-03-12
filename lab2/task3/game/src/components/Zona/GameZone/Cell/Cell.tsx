import styles from "./Cell.module.css"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Ball as BallComponent } from "../Ball/Ball"
import Step from "../Step/Step"
import State from "../../../../store/types/State"
import addNextBalls from "../../../../store/actions/AddNextBalls"
import unlockPlay from "../../../../store/actions/UnlockPlay"
import blockPlay from "../../../../store/actions/BlockPlay"
import moveBall from "../../../../store/actions/MoveBall"
import addBall from "../../../../store/actions/AddBall"
import GetShortestPath from "../../../../utils/GetShortestPath"
import GetFreeCell from "../../../../utils/GetFreeCell"
import GetMoves from "../../../../utils/GetMoves"
import Point from "../../../../types/Point"
import Ball from "../../../../types/Ball"

type CellProps = {
	size: { width: number, height: number },
	position?: Point
	ball?: Ball | null,
	step?: boolean,
	viewOnly?: boolean
}

function Cell({position, size, ball, step, viewOnly = false}: CellProps)
{
	const dispatch = useDispatch()
	const state = useSelector((state: State) => state)

	const [clickedCell, setClickedCell] = useState(false)

	const AddNextBalls = () =>
	{
		const timeOfAddition = 500
		const numberOfBalls = 3
		let counter = 0

		const addBalls = setInterval(() => {
			const color = state.nextBalls[counter]
			const position = GetFreeCell(state.field)

			color && dispatch(addBall({position, color}))

			++counter
		}, timeOfAddition)

		setTimeout(() => {
			dispatch(addNextBalls())
			clearInterval(addBalls)
			dispatch(unlockPlay())
		}, timeOfAddition * numberOfBalls)
	}

	const CellHandleClick = () =>
	{
		if(viewOnly || ball)
		{
			return
		}

		setClickedCell(true)
		if(state.selectedBall && position !== undefined)
		{
			const shortedPath = GetShortestPath(state.field, state.selectedBall.position, position)
			const moves = GetMoves(shortedPath)

			dispatch(blockPlay())
			dispatch(moveBall(position, moves))

			if(moves.length > 0)
			{
				AddNextBalls()
			}
			else
			{
				dispatch(unlockPlay())
			}
		}

		setTimeout( () => {
			setClickedCell(false)
		}, 1700);
	}

	return (
		<div
			className={(clickedCell && !ball && !step) ? styles.clicked : styles.wrap}
			style={{
				width: `${size.width}px`,
				height: `${size.height}px`,
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