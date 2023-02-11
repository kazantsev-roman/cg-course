import styles from "./Zona.module.css"
import Cell from "./Cell/Cell";

function Zona()
{
	function fillField()
	{
		let field: Array<Array<JSX.Element>> = []

		for(let i = 0; i < 9; ++i)
		{
			let row = []
			for(let j = 0; j < 9; ++j)
			{
				if (i === 3 && j === 2)
				{
					row.push(<Cell width={80} height={80} color={"#a8a8a8"} ball={"blue"}/>)
					continue
				}
				if (i === 5 && j === 5)
				{
					row.push(<Cell width={80} height={80} color={"#a8a8a8"} ball={"green"}/>)
					continue
				}
				if (i === 1 && j === 3)
				{
					row.push(<Cell width={80} height={80} color={"#a8a8a8"} ball={"yellow"}/>)
					continue
				}
				if (i === 2 && j === 3)
				{
					row.push(<Cell width={80} height={80} color={"#a8a8a8"} step={true}/>)
					continue
				}
				if (i === 3 && j === 3)
				{
					row.push(<Cell width={80} height={80} color={"#a8a8a8"} step={true}/>)
					continue
				}
				row.push(<Cell width={80} height={80} color={"#a8a8a8"}/>)
			}
			field.push(row)
		}

		return field
	}

	return (
		<div className={styles.wrap}>
			<div className={styles.filed}>
				{
					fillField().map(row => {
						return <div className={styles.row}>
							{row.map(cell => {
								return cell
							})}
						</div>
					})
				}
			</div>
		</div>
	)
}

export default Zona