type GameState = {

	alphabet: Array<{letter: string, used: boolean, correct: boolean}>,
	question: string,
	answer: string,
	numberOfAttempts: number,
	maxNumberOfAttempts: number
}

export default GameState