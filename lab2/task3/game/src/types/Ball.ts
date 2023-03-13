import Point from "./Point"
import Colors from "../store/constants/colors";

type Ball = {
	color: Colors,
	position: Point,
	removed: boolean
}

export default Ball