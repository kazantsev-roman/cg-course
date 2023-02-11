import styles from "./Window.module.css"

type WindowProps = {
	value: string
}

function Window({ value }: WindowProps)
{
	return (
		<div className={styles.wrap}>
			<div className={styles.content}>
				<div>{value}</div>
			</div>
		</div>
	)
}

export default Window