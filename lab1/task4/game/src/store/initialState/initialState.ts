import questions from "./russian/questions";
import getRandomElementFromArray from "../../utils/getRandomElementFromArray";
import alphabet from "./russian/alphabet";
import GameState from "../types/GameState";

function getInitialState(): GameState
{
	let question = getRandomElementFromArray(questions)

	const correctLetters = new Set(question.answer.toUpperCase())
	const newAlphabet = alphabet.map(letter => {
		let letterUpperCase = letter.toUpperCase()
		return {
			letter: letterUpperCase,
			used: false,
			correct: correctLetters.has(letterUpperCase)
		}
	})

	return {
		alphabet: newAlphabet,
		question: question.question,
		answer: question.answer,
		numberOfAttempts: 0,
		maxNumberOfAttempts: 10
	}
}

const initialState: GameState = getInitialState()

export { initialState, getInitialState }