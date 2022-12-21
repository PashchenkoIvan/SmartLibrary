import { React, useState, useEffect } from 'react';
import axios from 'axios';

import s from './form.module.css';

const field = (data, state, setState) => {
	const fieldBuilder = (label, type, value, name) => {
		const typeChecker = () => {
			if (type === 'textarea') {
				return (
					<textarea
						name={name}
						onChange={e =>
							setState({
								...state,
								[`${name}`]: e.target.value,
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
							setState({
								...state,
								[`${name}`]: e.target.value,
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

const fieldList = (data, state, setState) => {
	const fieldsListMap = data.map(el => (
		<>
			{field(
				data={
					label: el.label,
					type: el.type,
					value: el.value,
					name: el.name,
				}, state, setState
			)}
		</>
	));

	return (
		<>
			<ul className={s.fieldsList}>{fieldsListMap}</ul>
		</>
	);
};

const getState = (main = [], additional = []) => {
	const obj = {}
	const mainParsing = main.map(f => {
		obj[f.name] = `${f.value !== undefined ? f.value : ''}`;
	})
	const additionalParsing = additional.map(f => {
		obj[f.name] = `${f.value !== undefined ? f.value : ''}`;
	})
	// console.log(mainParsing);
	// console.log(additionalParsing);
	// console.log(obj);
	return obj
}

const postRequest = (data) =>
	axios.post(`https://ualib-orion.herokuapp.com/api/v1/library/books`, data)
		.then(res => {
		console.log(res);
		console.log(res.data);
	})

const Form = props => {
	const obj = getState(props.main, props.additional)
	const [state, setState] = useState({...obj});

	// console.log(state);

	const [isHidden, setIsHidden] = useState(true);
	useEffect(() => {}, [isHidden]);

	return (
		<form className={s.form} onSubmit={e => { e.preventDefault(); postRequest({...state}) }}>
			{/* Те поля, которые прогрузяться в любом случае */}
			{fieldList(props.main, state, setState)}
			
			{/* Дополнительные поля */}
			{props.additional ? 
				<>
					<div className={s.additionalBtn} onClick={() => setIsHidden(!isHidden)}>Додаткові поля</div>
					{!isHidden ? fieldList(props.additional, state, setState) : ''}
				</>
				: ''
			}
			{/* Кнопка отправки формы */}
			<div className={s.btns}>
				{props.btns.map(btn => <input className={s.btn} type={btn.type} value={btn.title} />)}
			</div>
		</form>
	);
};

export default Form;
