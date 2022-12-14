import { useState } from 'react';

import s from './field.module.css';

const Field = props => {
	const [data, setData] = useState(props.data);

	const fieldBuilder = (label, type, value, name) => {
		const typeChecker = () => {
			if (type === 'textarea') {
				return (
					<textarea
						name={name}
						onChange={e =>
							setData({
								...data[`${value}`],
								value: e.target.value,
							})
						}
					>
						{value}
					</textarea>
				);
			} else if (type === 'select') {
				return (
					<select name={name}>
						<option value='1'>1</option>
						<option value='2'>2</option>
						<option value='3' selected>
							3
						</option>
						<option value='4'>4</option>
						<option value='5'>5</option>
					</select>
				);
			} else {
				return (
					<input
						type={type}
						value={value}
						name={name}
						onChange={e =>
							setData({
								...data,
								value: e.target.value,
							})
						}
					/>
				);
			}
		};
		return (
			<li className={s.fieldBlock}>
				<label>{label}</label>
				{typeChecker()}
			</li>
		);
	};

	return <>{fieldBuilder(data.label, data.type, data.value, data.name)}</>;
};

export default Field;
