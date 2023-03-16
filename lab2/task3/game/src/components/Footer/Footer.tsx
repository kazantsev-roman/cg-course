import styles from "./Footer.module.css"
import Button from "./Button/Button";
import backgroundSound from "../../assets/sounds/background.mp3"
import { useEffect, useRef, useState } from "react";

function Footer()
{
	const audioRef = useRef(new Audio((backgroundSound)))
	const [isPlayed, setIsPlayed] = useState(false)

	useEffect(() => {
		if(isPlayed)
		{
			console.log('play')
			audioRef.current.play()
		}
		else
		{
			console.log('stop')
			audioRef.current.pause()
		}
	}, [isPlayed])

	return (
		<div className={styles.wrap}>
			<Button functional={"F1"} description={"Помощь"} action={() => {}} />
			<Button functional={"F2"} description={"Звук"} action={() => {setIsPlayed(!isPlayed)}} />
			<Button functional={"F3"} description={"Заново"} action={() => {}} />
		</div>
	)
}

export default Footer