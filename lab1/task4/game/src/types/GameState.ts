import LetterData from "./LetterData";

type GameState = {
	alphabet: Array<LetterData>,
	question: string,
	answer: string,
	usedLetters: Array<LetterData>,
	numberOfAttempts: number,
	maxNumberOfAttempts: number
}

export default GameState