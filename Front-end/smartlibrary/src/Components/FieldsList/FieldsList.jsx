import { React, useState } from 'react';
import Field from './Field/Field';

import s from './fieldsList.module.css';

const FieldsList = props => {
	const [data, setData] = useState(props.data);

	const fieldsListMap = data.map(el => (
		<>
			<Field data={
				{
					label: el.label,
					type: el.type,
					value: el.value,
					name: el.name
				}
			} />
		</>
	))

	return (
		<>
			<ul className={s.fieldsList}>
				{fieldsListMap}
			</ul>
		</>
	);
};

export default FieldsList;