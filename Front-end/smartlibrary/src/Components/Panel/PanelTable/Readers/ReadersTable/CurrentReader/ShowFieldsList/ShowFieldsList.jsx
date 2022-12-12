import { React, useState } from 'react';

import s from '../currentReader.module.css';
// import sp from '../../../Books/BooksTable/SingleBook/popUps.module.css';

const ShowFieldsList = props => {
	const [r, setR] = useState(props.reader);

	const singleFieldCreator = (label, type, value, name) => {
		const typeChecker = () => {
			if (type === 'text' || type === 'password' || type === 'checkbox') {
				return (
					<>
						<label>{label}</label>
						<input type={type} value={value} name={name} onChange={e => setR({ ...r[`${value}`], value: e.target.value })} />
					</>
				);
			} else if (type === 'textarea') {
				return (
					<>
						<label>{label}</label>
						<textarea name={name}>{value}</textarea>
					</>
				);
			} else {
			}
		};
		return <li className={s.singleFieldBlock}>{typeChecker()}</li>;
	};

	return (
		<>
			<ul className={s.fieldsList}>
				{singleFieldCreator('ПІБ', 'text', r.name, "fullName")}
				{singleFieldCreator('Email', 'text', r.email, "email")}
				{singleFieldCreator(
					'Місце роботи',
					'text',
					r.workAddress,
					"workAddress"
				)}
				{singleFieldCreator(
					'Дата народження',
					'text',
					r.birthday,
					"birthday"
				)}
				{singleFieldCreator(
					'Домашня адреса',
					'text',
					r.homeAddress,
					"homeAddress"
				)}
				{singleFieldCreator('Телефон', 'text', r.phone, `${r.id}_phone`)}
				{singleFieldCreator(
					'Паспортні дані (за згодою)',
					'text',
					`${r.passportInfo ? r.passportInfo : 'Не дав(-ла) згоду'}`,
					"passportInfo"
				)}
				{singleFieldCreator(
					'Пароль',
					'password',
					r.password,
					"password"
				)}
				{singleFieldCreator('Дитина', 'checkbox', r.isChild, `${r.id}_isChild`)}
				{singleFieldCreator(
					'Додаткова інформація',
					'textarea',
					r.additionalInfo,
					"additionalInfo"
				)}
			</ul>
		</>
	);
};

export default ShowFieldsList;