import styles from "./Footer.module.css"
import Button from "./Button/Button";
import backgroundSound from "../../assets/sounds/background.mp3"
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import newGame from "../../store/actions/NewGame";

type FooterProps = {
	setViewHelpModal: (view: boolean) => void
}

function Footer({setViewHelpModal}: FooterProps)
{
	const audioRef = useRef(new Audio((backgroundSound)))

	const dispatch = useDispatch()
	const [isPlayed, setIsPlayed] = useState(false)

	useEffect(() => {
		audioRef.current.loop = true
		if (isPlayed)
		{
			audioRef.current.play()
		}
		else
		{
			audioRef.current.pause()
		}
	}, [isPlayed])

	return (
		<div className={styles.wrap}>
			<Button description={"Помощь"} action={() => {setViewHelpModal(true)}} />
			<Button description={"Звук"} action={() => {setIsPlayed(!isPlayed)}} active={isPlayed} />
			<Button description={"Новая игра"} action={() => {dispatch(newGame())}} />
		</div>
	)
}

export default Footer