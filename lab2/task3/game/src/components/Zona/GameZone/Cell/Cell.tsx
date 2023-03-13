import styles from "./Cell.module.css"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Ball as BallComponent } from "../Ball/Ball"
import Step from "../Step/Step"
import State from "../../../../store/types/State"
import PrepareRemovedBalls from "../../../../store/actions/PrepareRemovedBalls"
import addNextBalls from "../../../../store/actions/AddNextBalls"
import RemoveBalls from "../../../../store/actions/RemoveBalls"
import unlockPlay from "../../../../store/actions/UnlockPlay"
import blockPlay from "../../../../store/actions/BlockPlay"
import moveBall from "../../../../store/actions/MoveBall"
import addBall from "../../../../store/actions/AddBall"
import MaxHorizontalChain from "../../../../utils/MaxHorizontalChain"
import MaxVerticalChain from "../../../../utils/MaxVerticalChain"
import MaxDiagonalChain from "../../../../utils/MaxDiagonalChain"
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
	const field = useSelector((state: State) => state.field)
	const canPlay = useSelector((state: State) => state.canPlay)
	const nextBalls = useSelector((state: State) => state.nextBalls)
	const selectedBall = useSelector((state: State) => state.selectedBall)

	const [clickedCell, setClickedCell] = useState(false)

	const getChains = () => {
		let verticalChain: Array<Ball> = []
		let horizontalChain: Array<Ball> = []
		let diagonalChain: Array<Ball> = []

		for (let i = 0; i < nextBalls.length; ++i)
		{
			const color = nextBalls[i]
			if (color === null)
			{
				return []
			}

			verticalChain = MaxVerticalChain(field, color)
			horizontalChain = MaxHorizontalChain(field, color)
			diagonalChain = MaxDiagonalChain(field, color)

			if (verticalChain.length === 0 && horizontalChain.length === 0 && diagonalChain.length === 0)
			{
				continue
			}

			if (verticalChain.length > horizontalChain.length && verticalChain.length > diagonalChain.length)
			{
				return verticalChain
			}
			if (horizontalChain.length > verticalChain.length && horizontalChain.length > diagonalChain.length)
			{
				return horizontalChain
			}
			if (diagonalChain.length > verticalChain.length && diagonalChain.length > horizontalChain.length)
			{
				return verticalChain
			}
		}

		return []
	}

	const AddNextBalls = () =>
	{
		const timeOfAddition = 500
		const numberOfBalls = 3
		let counter = 0

		const addBalls = setInterval(() => {
			const color = nextBalls[counter]
			const position = GetFreeCell(field)

			color && dispatch(addBall({position, color, removed: false}))

			++counter
		}, timeOfAddition)

		setTimeout(() => {
			dispatch(addNextBalls())
			clearInterval(addBalls)
		}, timeOfAddition * numberOfBalls)
	}

	const MoveBall = () => {
		if(selectedBall && position !== undefined)
		{
			const shortedPath = GetShortestPath(field, selectedBall.position, position)
			const moves = GetMoves(shortedPath)

			dispatch(blockPlay())
			dispatch(moveBall(position, moves))

			if(moves.length > 0)
			{
				const chains = getChains()
				if (chains.length !== 0)
				{
					dispatch(PrepareRemovedBalls(chains))
					setTimeout(() => {
						dispatch((RemoveBalls(chains)))
					}, 1000)
				}
				else
				{
					AddNextBalls()
				}
			}

			dispatch(unlockPlay())
		}
	}

	const CellHandleClick = () =>
	{
		if(viewOnly || ball)
		{
			return
		}

		setClickedCell(true)
		MoveBall()

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
				cursor: canPlay ? "pointer" : "none"
			}}
			onClick={CellHandleClick}
		>
			{ball && <BallComponent ball={ball} viewOnly={viewOnly}/>}
			{step && <Step/>}
		</div>
	)
}

export default Cell