import { useEffect } from 'react';
import s from './Login.module.css';

const Login = props => {
	useEffect(() => {
		document.title = 'Вхід';
	}, []);
	props.setHeader(false);
	return (
		<div className={s.container}>
			<div className={s.block}>
				<h1>Увійти</h1>
				<div className={s.inputBlock}>
					<p>Email</p>
					<input type='email' placeholder='Email' />
				</div>
				<div className={s.inputBlock}>
					<p>Пароль</p>
					<input type='password' placeholder='Пароль' />
				</div>
				<button>Вхід до аккаунту</button>
			</div>
		</div>
	);
};
export default Login;
