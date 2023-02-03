import { NEW_GAME } from "../constants/constants";
import { LetterData } from "../../types/GameState";

function newGame()
{
	return {
		type: NEW_GAME,
		payload: {} as LetterData
	}
}

export default newGame