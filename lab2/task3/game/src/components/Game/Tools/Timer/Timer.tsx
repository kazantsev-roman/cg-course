import styles from "./Timer.module.css"
import timer from "../../../../assets/timer.png"
import useTimer from "../../../../hooks/useTimer"

function Timer()
{
	const seconds = useTimer(9999)

	return (
		<div className={styles.wrap}>
			<div className={styles.photo} data-title="Оставшееся время">
				<img className={styles.image} src={timer} alt={"timer"}/>
			</div>
			<div className={styles.text}>{seconds}</div>
		</div>
	)
}

export default Timer