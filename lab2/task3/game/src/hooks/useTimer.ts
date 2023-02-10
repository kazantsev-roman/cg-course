import { useEffect, useState } from "react"

const useTimer = (initialSeconds: number) => {
	const [timeLeft, setTimeLeft] = useState(initialSeconds)
	const [isCounting, setIsCounting] = useState(true)

	useEffect(() => {
		const interval = setInterval(() => {
			isCounting && setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0))
		}, 1000)
		if (timeLeft === 0)
		{
			setIsCounting(false)
		}

		return () => {
			clearInterval(interval)
		}
	}, [timeLeft, isCounting])

	return timeLeft
}

export default useTimer