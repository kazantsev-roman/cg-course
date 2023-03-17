import styles from "./GameZone.module.css"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Cell from "./Cell/Cell"
import State from "../../../store/types/State"
import addNextBalls from "../../../store/actions/AddNextBalls"
import unlockPlay from "../../../store/actions/UnlockPlay"
import addBall from "../../../store/actions/AddBall"
import GetFreeCell from "../../../utils/GetFreeCell"
import GetColor from "../../../utils/GetColor"

function GameZone()
{
	const dispatch = useDispatch()
	const field = useSelector((state: State) => state.field)
	const startGame = useSelector((state: State) => state.startGame)

	useEffect(() => {
		if (startGame)
		{
			const timeOfAddition = 200
			const numberOfBalls = 5

			const addBalls = setInterval( () => {
				const position = GetFreeCell(field)
				const color = GetColor()

				dispatch(addBall({position, color, removed: false, move: null}))
			}, timeOfAddition)

			setTimeout(() => {
				clearInterval(addBalls)
			}, timeOfAddition * numberOfBalls)

			setTimeout(() => {
				dispatch(addNextBalls())
				dispatch(unlockPlay())
			}, timeOfAddition * numberOfBalls + 500)
		}
	}, [startGame])

	return (
		<div className={styles.wrap}>
			<div className={styles.filed}>
				{
					field.map((row, indexY) => {
						return <div key={indexY} className={styles.row}>
							{
								row.map((cell, indexX) => {
									return <Cell key={indexX} size={{width: 80, height: 80}} position={{x: indexX, y: indexY}} ball={cell}/>
								})
							}
						</div>
					})
				}
			</div>
		</div>
	)
}

export default GameZone