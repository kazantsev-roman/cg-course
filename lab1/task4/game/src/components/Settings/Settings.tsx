import styles from "./Settings.module.css"
import settingsImage from "../../assets/images/settings.png"

type SettingsProps = {
	setViewModal: (viewModal: boolean) => void
}

function Settings({ setViewModal }: SettingsProps)
{
	return (
		<div className={styles.container}>
			<img className={styles.image} src={settingsImage}  alt={"image"} onClick={() => {setViewModal(true)}}/>
		</div>
	)
}

export default Settings