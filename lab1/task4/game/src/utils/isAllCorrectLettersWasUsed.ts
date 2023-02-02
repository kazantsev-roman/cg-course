function isAllCorrectLettersWasUsed(usedLetters: Array<{letter: string, used: boolean, correct: boolean}>, answer: string)
{
	const letters = new Set(answer)

	usedLetters.forEach(letter => {
		if (letters.has(letter.letter))
		{
			letters.delete(letter.letter)
		}
	})

	return letters.size === 0
}

export default isAllCorrectLettersWasUsed