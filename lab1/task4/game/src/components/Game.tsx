import { useState } from "react";
import Gallows from "./Gallows/Gallows";
import FieldOfDreams from "./FieldOfDreams/FieldOfDreams";
import SettingsModal from "./SettingsModal/SettingsModal";
import Settings from "./Settings/Settings";

function Game()
{
	const [viewMode, setViewMode] = useState<'gallows' | 'field of dreams'>('gallows')
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
				viewModal && <SettingsModal setViewMode={setViewMode} setViewModal={setViewModal} />
			}
		</>
	)
}

export default Game