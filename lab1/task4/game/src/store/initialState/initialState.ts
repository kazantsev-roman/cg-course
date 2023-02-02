import questions from "./russian/questions";
import getRandomElementFromArray from "../../utils/getRandomElementFromArray";
import alphabet from "./russian/alphabet";

function getInitialState()
{
	let question = getRandomElementFromArray(questions)
	question.answer.toUpperCase()

	alphabet.forEach(letter => {
		letter.toUpperCase()
	})

	const correctLetters = new Set(question.answer)
	const newAlphabet = alphabet.map(letter => {
		return {
			letter: letter,
			used: false,
			correct: correctLetters.has(letter)
		}
	})

	return {
		alphabet: newAlphabet,
		question: question.question,
		answer: question.answer,
		numberOfAttempts: 0
	}
}

const initialState = getInitialState()

export default initialState