import styles from "./Settings.module.css"
import reload from "../../assets/images/reload.png"
import close from "../../assets/images/close.png"
import { ChangeEvent } from "react";

type SettingsModalProps = {
	viewMode: 'gallows' | 'field of dreams',
	setViewMode: (mode: 'gallows' | 'field of dreams') => void,
	setViewModal: (viewModal: boolean) => void
}

function SettingsModal({ viewMode, setViewMode, setViewModal }: SettingsModalProps)
{
	function closeModal()
	{
		setViewModal(false)
	}

	function setNewGame()
	{
		closeModal()
	}

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
			<div className={styles.button_container} onClick={setNewGame}>
				<img className={styles.image} src={reload} alt={"reload"} />
				<p>Новая игра</p>
			</div>
			<div className={styles.mode_container}>
				<p>Режим визулизации</p>
				<label>
					<input
						type="radio"
						value={"field of dreams"}
						checked={viewMode === "field of dreams"}
						onChange={setNewMode}
					/>
					<div>Поле чудес</div>
				</label>
				<label>
					<input
						type="radio"
						value={"gallows"}
						checked={viewMode === "gallows"}
						onChange={setNewMode}
					/>
					<div>Виселица</div>
				</label>
			</div>
		</div>
	)
}

export default SettingsModal