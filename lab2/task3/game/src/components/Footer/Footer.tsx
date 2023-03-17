import styles from "./Footer.module.css"
import Button from "./Button/Button";
import backgroundSound from "../../assets/sounds/background.mp3"
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import newGame from "../../store/actions/NewGame";

function Footer()
{
	const audioRef = useRef(new Audio((backgroundSound)))

	const dispatch = useDispatch()
	const [isPlayed, setIsPlayed] = useState(false)

	useEffect(() => {
		isPlayed
			? audioRef.current.play()
			: audioRef.current.pause()
	}, [isPlayed])

	return (
		<div className={styles.wrap}>
			<Button description={"Помощь"} action={() => {}} />
			<Button description={"Звук"} action={() => {setIsPlayed(!isPlayed)}} active={isPlayed} />
			<Button description={"Новая игра"} action={() => {dispatch(newGame())}} />
		</div>
	)
}

export default Footer