import styles from "./Level.module.css";
import levelup from "../../../../assets/level-up.png";
import { useState } from "react";

function Level()
{
	const [level, setLevel] = useState(1)

	return (
		<div className={styles.wrap}>
			<div className={styles.photo} data-title="Текущий уровень">
				<img className={styles.image} src={levelup} alt={"timer"}/>
			</div>
			<div className={styles.text}>{level}</div>
		</div>
	)
}

export default Level