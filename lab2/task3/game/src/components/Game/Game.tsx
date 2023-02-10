import Field from "./Field/Field"
import styles from "./Game.module.css"
import Tools from "./Tools/Tools";

function Game()
{
	return (
		<>
			<div className={styles.wrap}>
				<div className={styles.field_wrap}>
					<Field />
				</div>
				<div className={styles.tools_wrap}>
					<Tools />
				</div>
			</div>
		</>
	)
}

export default Game