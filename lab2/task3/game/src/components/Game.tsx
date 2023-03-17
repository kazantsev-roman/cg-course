import styles from "./Game.module.css"
import Header from "./Header/Header"
import Zona from "./Zona/Zona"
import GameOverModal from "./GameOverModal/GameOverModal"
import Footer from "./Footer/Footer";
import { useState } from "react";
import HelpModal from "./HelpModal/HelpModal";

function Game()
{
	const [viewHelpModal, setViewHelpModal] = useState(false)

	return (
		<div className={styles.wrap}>
			<Header/>
			<Zona/>
			<Footer setViewHelpModal={setViewHelpModal} />
			<GameOverModal />
			<HelpModal viewModal={viewHelpModal} setViewModal={setViewHelpModal}/>
		</div>
	)
}

export default Game