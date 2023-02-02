import { NEW_GAME } from "../constants/constants";

type NewGameAction = {
	type: 'MARK_LETTER_AS_USED',
	payload: {}
}

type MarkLetterAsUsedAction = {
	type: 'NEW_GAME',
	payload: { letter: string }
}

type Action = NewGameAction | MarkLetterAsUsedAction

export default Action