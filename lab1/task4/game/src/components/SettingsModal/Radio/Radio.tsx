import { ChangeEvent } from "react";

type RadioProps = {
	title: string,
	value: string,
	checked: boolean,
	onChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

function Radio({ title, value, checked, onChange }: RadioProps)
{
	return (
		<label>
			<input
				type="radio"
				value={value}
				checked={checked}
				onChange={onChange}
			/>
			<div>{title}</div>
		</label>
	)
}

export default Radio