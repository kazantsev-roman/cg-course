import Colors from "../store/constants/colors"

function GetColor(): string
{
	const randomIndex = Math.floor(Math.random() * 6)

	if (randomIndex === 0)
	{
		return Colors.Cyan
	}
	if (randomIndex === 1)
	{
		return Colors.Red
	}
	if (randomIndex === 2)
	{
		return Colors.Blue
	}
	if (randomIndex === 3)
	{
		return Colors.Pink
	}
	if (randomIndex === 4)
	{
		return Colors.Green
	}

	return Colors.Yellow
}

export default GetColor