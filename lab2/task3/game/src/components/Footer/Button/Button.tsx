import styles from "./Button.module.css"

type ButtonProps = {
	functional: string,
	description: string,
	action: () => void,
	active?: boolean
}

function Button({ functional, description, action, active = true }: ButtonProps)
{
	return (
		<div className={styles.wrap}>
			<div className={styles.functional} onClick={action}>
				<p>{functional}</p>
			</div>
			<div className={styles.description}>
				<p style={{color: active ? "#00ff00" : "#ff0026"}}>{description}</p>
			</div>
		</div>
	)
}

export default Button