import styles from "./Zona.module.css"
import { useSelector } from "react-redux"
import State from "../../../store/types/State";
import Cell from "./Cell/Cell";
import { useEffect } from "react";
import addBall from "../../../store/actions/AddBall";
import { useDispatch } from "react-redux";
import GetFreeCell from "../../../utils/GetFreeCell";
import GetColor from "../../../utils/GetColor";
import addNextBalls from "../../../store/actions/AddNextBalls";
import unlockPlay from "../../../store/actions/UnlockPlay";

function Zona()
{
	const dispatch = useDispatch()
	const field = useSelector((state: State) => state.field)

	useEffect(() => {
		const timeOfAddition = 200
		const numberOfBalls = 5

		const addBalls = setInterval( () => {
			const position = GetFreeCell(field)
			const color = GetColor()

			dispatch(addBall({position, color}))
		}, timeOfAddition)

		setTimeout(() => {
			clearInterval(addBalls)
		}, timeOfAddition * numberOfBalls)

		setTimeout(() => {
			dispatch(addNextBalls())
			dispatch(unlockPlay())
		}, timeOfAddition * numberOfBalls + 500)
	}, [])

	return (
		<div className={styles.wrap}>
			<div className={styles.filed}>
				{
					field.map((row, index) => {
						return <div key={index} className={styles.row}>
							{
								row.map((cell, index) => {
									return <Cell key={index} width={80} height={80} color={"#a8a8a8"} ball={cell?.color}/>
								})
							}
						</div>
					})
				}
			</div>
		</div>
	)
}

export default Zona