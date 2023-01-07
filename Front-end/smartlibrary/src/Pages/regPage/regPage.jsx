import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import s from './regPage.module.css';
import f from '../../assets/styles/form.module.css';

const RegPage = props => {
	const [state, setState] = useState({
		full_name: '',
		phone: '+380',
		email: ''
	});

	useEffect(() => {
		document.title = 'Вхід';
	}, []);

	props.setHeader(false);

	return (
		<div className={s.container}>
			<div className={s.block}>
				<h1 className={s.caption}>Реєстрація</h1>
				<form
					className={f.form}
					onSubmit={e => {
						e.preventDefault();
						console.log(state);
						// Promise.resolve(
						// 	Auth.AuthService.makeLogin({
						// 		email: state.email,
						// 		password: state.password,
						// 	})
						// ).then(res => (res !== undefined ? (Auth.status = res ? 'librarian' : 'user') : Auth.status = 'anonym'));
					}}
				>
					<ul className={f.fieldsList}>
						<li className={f.fieldBlock}>
							<label>ПІБ</label>
							<input
								type='text'
								value={state.full_name}
								name='full_name'
								onChange={e =>
									setState({
										...state,
										full_name: e.target.value,
									})
								}
							/>
						</li>
						<li className={f.fieldBlock}>
							<label>Номер телефону</label>
							<input
								type='text'
								value={state.phone}
								name='phone'
								onChange={e =>
									setState({
										...state,
										phone: e.target.value,
									})
								}
							/>
						</li>
						<li className={f.fieldBlock}>
							<label>Email</label>
							<input
								type='email'
								value={state.email}
								name='email'
								onChange={e =>
									setState({
										...state,
										email: e.target.value,
									})
								}
							/>
						</li>
					</ul>
					<div className={f.btns}>
						<input
							className={f.btn}
							type='submit'
							value='Зареєструвати'
							onClick={() => console.log('Btn clicked!')}
						/>
					</div>
				</form>
				<Link
					className={s.link}
					to='/login'
				>
					У мене вже є аккаунт
				</Link>
			</div>
		</div>
	);
};
export default RegPage;
