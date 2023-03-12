import styles from "./Player.module.css"
import platform from "../../../assets/images/platform.png"
import degree from "../../../assets/images/degree.png"
import player from "../../../assets/images/player.png"
import king from "../../../assets/images/king.png"

type PlayerProps = {
	type: "player" | "king",
	name: string,
	numberOfPoints: number
}

function Player({ type, numberOfPoints, name }:PlayerProps)
{
	function getDegree(count: number)
	{
		const degrees: Array<JSX.Element> = []

		count = count > 1630 ? 1630 : count

		for (let i=0; i < count / 30; i++) {
			degrees.push(<img key={i} src={degree} alt={"degree"}/>)
		}

		return degrees
	}

	return (
		<div className={styles.wrap}>
			<div className={ type === "king" ? styles.images_king : styles.images_player }>
				<img src={type === "king" ? king : player} alt={type}/>
				{
					getDegree(numberOfPoints).map((degree) => degree)
				}
				<img src={platform} alt={"platform"}/>
			</div>
			<h4 className={styles.name}>{name}</h4>
		</div>
	)
}

export default Player