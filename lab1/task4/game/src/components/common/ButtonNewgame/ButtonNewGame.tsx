import styles from "./ButtonNewGame.module.css";
import reload from "../../../assets/images/reload.png";
import newGameAction from "../../../store/actions/newGameAction";
import { useDispatch } from "react-redux";

type ButtonNewGameProps = {
	callback: () => void
}

function ButtonNewGame({callback}: ButtonNewGameProps)
{
	const dispatch = useDispatch()

	function setNewGame()
	{
		dispatch(newGameAction())
		callback()
	}

	return (
		<div className={styles.button_container} onClick={setNewGame}>
			<img className={styles.image} src={reload} alt={"reload"} />
			<p>Новая игра</p>
		</div>
	)
}

export default ButtonNewGame