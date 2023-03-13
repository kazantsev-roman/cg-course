function GetNumberOfPoints(numberOfBalls: number): number
{
	if (numberOfBalls === 5)
	{
		return 10
	}
	if (numberOfBalls === 6)
	{
		return 15
	}
	if (numberOfBalls === 7)
	{
		return 20
	}
	if (numberOfBalls === 8)
	{
		return 30
	}
	if (numberOfBalls === 9)
	{
		return 50
	}

	return 0
}

export default GetNumberOfPoints