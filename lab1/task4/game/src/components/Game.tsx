import { useState } from "react";
import styles from "./Game.module.css"
import Gallows from "./Gallows/Gallows";
import FieldOfDreams from "./FieldOfDreams/FieldOfDreams";
import SettingsModal from "./SettingsModal/SettingsModal";
import Settings from "./Settings/Settings";
import GameOver from "./GameOver/GameOver";

function Game()
{
	const [viewMode, setViewMode] = useState<'gallows' | 'field of dreams'>('field of dreams')
	const [viewModal, setViewModal] = useState(false)

	return (
		<>
			<Settings setViewModal={setViewModal} />
			{
				viewMode === 'gallows'
					? <Gallows />
					: <FieldOfDreams />
			}
			{
				viewModal &&
				<>
					<div className={styles.shadow}></div>
					<SettingsModal viewMode={viewMode} setViewMode={setViewMode} setViewModal={setViewModal} />
				</>
			}
			<GameOver />
		</>
	)
}

export default Game