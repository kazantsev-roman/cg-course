import styles from "./Button.module.css"

type ButtonProps = {
	imageUrl: string,
	text: string,
	action: () => void
}

function Button({ imageUrl, text, action }: ButtonProps)
{
	return (
		<div className={styles.wrap} onClick={action}>
			<img className={styles.image} src={imageUrl} alt={"text"}/>
			<p className={styles.text}>{text}</p>
		</div>
	)
}

export default Button