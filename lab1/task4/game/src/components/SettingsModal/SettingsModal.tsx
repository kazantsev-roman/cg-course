import styles from "./Settings.module.css"
import close from "../../assets/images/close.png"
import { ChangeEvent } from "react";
import ButtonNewGame from "../common/ButtonNewgame/ButtonNewGame";
import Radio from "./Radio/Radio";

type SettingsModalProps = {
	viewMode: 'gallows' | 'field of dreams',
	setViewMode: (mode: 'gallows' | 'field of dreams') => void,
	setViewModal: (viewModal: boolean) => void
}

function SettingsModal({ viewMode, setViewMode, setViewModal }: SettingsModalProps)
{
	const closeModal = () => setViewModal(false)

	function setNewMode(event: ChangeEvent<HTMLInputElement>)
	{
		const result = event.target.value
		if (result === 'gallows' || result === 'field of dreams')
		{
			setViewMode(result)
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.header_container}>
				<h1 className={styles.header}>Настройки</h1>
				<img className={styles.image} src={close} alt={"close"} onClick={closeModal} />
			</div>
			<ButtonNewGame callback={closeModal} />
			<div className={styles.mode_container}>
				<p>Режим визулизации</p>
				<Radio title={"Поле чудес"} value={"field of dreams"} checked={viewMode === "field of dreams"} onChange={setNewMode} />
				<Radio title={"Виселица"} value={"gallows"} checked={viewMode === "gallows"} onChange={setNewMode} />
			</div>
		</div>
	)
}

export default SettingsModal