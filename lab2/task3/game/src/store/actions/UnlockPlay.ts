import { UNLOCK_PLAY } from "../constants/actions";

function unlockPlay()
{
	return {
		type: UNLOCK_PLAY,
		payload: {}
	}
}

export default unlockPlay