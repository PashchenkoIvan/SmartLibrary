import { useEffect, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { AuthContext, ServicesContext } from '../../index';

import s from './Login.module.css';
import f from '../../assets/styles/form.module.css';

const Login = props => {
	const navigate = useNavigate();
	const Services = useContext(ServicesContext);
	const [state, setState] = useState({
		email: '',
		password: '',
	});

	useEffect(() => {
		document.title = 'Вхід';
	}, []);

	useEffect(() => {
		if (props.status === 'reader') navigate('../', { replace: true });
	}, [props.status]);

	props.setHeader(false);

	return (
		<div className={s.container}>
			<div className={s.block}>
				<h1 className={s.caption}>Авторизація</h1>
				<form
					className={f.form}
					onSubmit={e => {
						e.preventDefault();
						console.log(state);
						Promise.resolve(
							Services.AuthService.makeLogin({
								email: state.email,
								password: state.password,
							})
						).then(res =>
							res !== undefined
								? props.setStatus(res ? 'librarian' : 'user')
								: props.setStatus('anonym')
						);
					}}
				>
					<ul className={f.fieldsList}>
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
						<li className={f.fieldBlock}>
							<label>Пароль</label>
							<input
								type='password'
								value={state.password}
								name='password'
								onChange={e =>
									setState({
										...state,
										password: e.target.value,
									})
								}
							/>
						</li>
					</ul>
					<div className={f.btns}>
						<input
							className={f.btn}
							type='submit'
							value='Вхід до аккаунту'
							// onClick={() =>
							// 	setTimeout(
							// 		() =>
							// 			Auth.status === 'anonym' ? console.log(0) : navigate('/'),
							// 		2000
							// 	)
							// }
						/>
					</div>
				</form>
				<Link className={s.link} to='/registration'>
					Зареєструватися
				</Link>
			</div>
		</div>
	);
};
export default Login;
