import Point from "./Point"
import Colors from "../store/constants/colors";
import Direction from "./Direction";

type Ball = {
	color: Colors,
	position: Point,
	removed: boolean,
	move: Direction | null
}

export default Ball