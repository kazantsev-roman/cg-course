import styles from "./Button.module.css"

type ButtonProps = {
	description: string,
	action: () => void,
	active?: boolean
}

function Button({ description, action, active = true }: ButtonProps)
{
	return (
		<div className={styles.wrap}>
			<div className={styles.description} onClick={action}>
				<p style={{color: active ? "#00ff00" : "#ff0026", transition: "0.5s"}}>{description}</p>
			</div>
		</div>
	)
}

export default Button