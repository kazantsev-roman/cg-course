import { NEW_GAME } from "../constants/constants";

function newGame()
{
	return {
		type: NEW_GAME,
		payload: {}
	}
}

export default newGame