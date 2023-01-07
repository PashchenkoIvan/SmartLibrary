import { React, useState, useEffect, useContext } from 'react';
import { RequestsContext, AuthContext, status } from '../../index';

import s from './form.module.css';

const selectOptionMap = (list = []) => {
	const listMapper = list.map(option =>
		<option value={option?.value || option?.title}>{option?.title || option}</option>
	)
	return listMapper;
}

const field = (data, state, setState) => {
	const fieldBuilder = (label, type, value, name, optionsList = [], categoriesList = []) => {
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
				if (name !== 'category') {
					return (
						<select
							name={name}
							onChange={e => 
								setState({
									...state,
									[`${name}`]: e.target.value,
								})
							}>
							{selectOptionMap(optionsList)}
						</select>
					)
				} else {
					return (
						<select
							name={name}
							onChange={e => 
								setState({
									...state,
									[`${name}`]: [`${e.target.value}`],
								})
							}>
							<option>Оберіть категорію</option>
							{selectOptionMap(categoriesList)}
						</select>
					)
				}
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

	return <>{fieldBuilder(data.label, data.type, data.value, data.name, data.optionsList, data.categoriesList)}</>;
};

const fieldList = (data, state, setState, categoriesList = []) => {
	const fieldsListMap = data.map(el => (
		<>
			{field(
				(data = {
					label: el.label,
					type: el.type,
					value: el.value,
					name: el.name,
					optionsList: el.optionsList,
					categoriesList: categoriesList
				}),
				state,
				setState
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
	const obj = {};
	const mainParsing = main.map(f => {
		obj[f.name] = `${f.value !== undefined ? f.value : ''}`;
	});
	const additionalParsing = additional.map(f => {
		obj[f.name] = `${f.value !== undefined ? f.value : ''}`;
	});
	return obj;
};

const Form = props => {
	const Requests = useContext(RequestsContext);
	const Auth = useContext(AuthContext);

	const obj = getState(props.main, props.additional);
	const [state, setState] = useState({ ...obj });

	const [isHidden, setIsHidden] = useState(true);
	useEffect(() => {}, [isHidden]);

	const postRequest = (data, btns) => {
		if (btns.filter(btn => btn.post === 'add-book').length > 0) {
			Requests.BookRequests.AddBook({ ...data }).then(res => {
				const book = res.data;
				console.log(book);
			});
		} else if (btns.filter(btn => btn.post === 'login').length > 0) {
			Promise.resolve(
				Auth.AuthService.makeLogin({
					email: data.email,
					password: data.password,
				})
			).then(res => (res !== undefined ? (Auth.status = res ? 'librarian' : 'user') : Auth.status = 'anonym'));
		} else {
		}
	};

	const categoriesList = Auth.categoriesList;

	return (
		<form
			className={s.form}
			onSubmit={e => {
				e.preventDefault();
				console.log(state);
				postRequest({ ...state }, props.btns);
			}}
		>
			{/* Те поля, которые прогрузяться в любом случае */}
			{fieldList(props.main, state, setState, categoriesList)}

			{/* Дополнительные поля */}
			{props.additional ? (
				<>
					<div
						className={s.additionalBtn}
						onClick={() => setIsHidden(!isHidden)}
					>
						Додаткові поля
					</div>
					{!isHidden ? fieldList(props.additional, state, setState) : ''}
				</>
			) : (
				''
			)}
			{/* Кнопка отправки формы */}
			<div className={s.btns}>
				{props.btns.map(btn => (
					<input
						className={s.btn}
						type={btn.type}
						value={btn.title}
						onClick={btn.onclick}
					/>
				))}
			</div>
		</form>
	);
};

export default Form;
