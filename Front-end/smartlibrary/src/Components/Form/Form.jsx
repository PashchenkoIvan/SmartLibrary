import { React, useState, useEffect, useContext } from 'react';
import { RequestsContext, AuthContext, status } from '../../index';
import { Navigate, redirect } from 'react-router-dom';

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
						value={state[`${name}`]}
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
	return obj
}

const Form = props => {
	const Requests = useContext(RequestsContext);
	const Auth = useContext(AuthContext);

	const obj = getState(props.main, props.additional)
	const [state, setState] = useState({...obj});

	const [isHidden, setIsHidden] = useState(true);
	useEffect(() => {}, [isHidden]);

	const postRequest = (data, btns) => {
		// console.log(btns.filter(btn => btn.post === 'add-book'));
		// console.log({...data});
		if (btns.filter(btn => btn.post === 'add-book').length > 0) {
			Requests.AddBook({...data}).then(res => {
				const book = res.data;
				console.log(book);
			});
		} else if (btns.filter(btn => btn.post === 'login').length > 0) {
			// new Promise(
				
			// 	).then(function(result) {
			// 	console.log(result)
			// })
			// if (Auth.AuthService.makeLogin({email: data.email, password: data.password})) {
			// 	console.log(1);
			// } else {
			// 	console.log(2);
			// }
			console.log(Auth.AuthService.makeLogin({email: data.email, password: data.password}));
			setTimeout(() => Auth.status = 'user', 1000)
		} else {}
	}
		


	return (
		<form className={s.form} onSubmit={e => { e.preventDefault(); postRequest({...state}, props.btns) }}>
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
				{props.btns.map(btn => <input className={s.btn} type={btn.type} value={btn.title} onClick={btn.onclick} />)}
			</div>
		</form>
	);
};

export default Form;
