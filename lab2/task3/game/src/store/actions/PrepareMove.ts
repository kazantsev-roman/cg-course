import { PREPARE_MOVE } from "../constants/actions";
import Direction from "../../types/Direction";

function newGame(direction: Direction)
{
	return {
		type: PREPARE_MOVE,
		direction: direction
	}
}

export default newGame