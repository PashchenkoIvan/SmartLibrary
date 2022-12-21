import s from './Form.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Form = () => {
	useEffect(() => {
		document.title = 'Бібліотекар';
	}, []);
	const singleFieldCreator = (label, type, value, name) => {
		const typeChecker = () => {
			if (type === 'text' || type === 'number') {
				return (
					<>
						<label>{label}</label>
						<input type={type} value={value} name={name} />
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
		<div className={s.container}>
			<div className={s.block}>
				<Link to='/admin/visitors'>Повернутись</Link>
				<h1>ДОДАВАННЯ НОВИНИ</h1>
				{singleFieldCreator('ПІБ', 'text', '', 'PIB')}
				{singleFieldCreator('Місце проживання', 'text', '', 'PIB')}
				{singleFieldCreator('Дата народження', 'text', '', 'PIB')}
				{singleFieldCreator('Коментар', 'text', '', 'PIB')}
				{singleFieldCreator('Книги', 'textarea', '', 'PIB')}
				{singleFieldCreator('Дата', 'text', '', 'PIB')}
				<button>Додати</button>
			</div>
		</div>
	);
};

export default Form;
