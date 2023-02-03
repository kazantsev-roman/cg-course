export type LetterData = {
	letter: string,
	used: boolean,
	correct: boolean
}

export type GameState = {

	alphabet: Array<LetterData>,
	question: string,
	answer: string,
	usedLetters: Array<LetterData>,
	numberOfAttempts: number,
	maxNumberOfAttempts: number
}