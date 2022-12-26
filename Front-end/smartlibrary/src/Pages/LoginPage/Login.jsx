import { useEffect, useContext } from 'react';
import {
	Link,
	useNavigate,
	Navigate
} from 'react-router-dom';

import { Form } from '../../Components/index';
import { AuthContext } from '../../index';

import s from './Login.module.css';
import formData from './formData';

const Login = props => {
	const navigate = useNavigate();
	const Auth = useContext(AuthContext);

	useEffect(() => {
		document.title = 'Вхід';
	}, []);

	useEffect(() => {
		console.log(Auth.status);
		if (Auth.status === 'user') {
			return <Navigate replace to='/personPage' />;
		}
	}, [Auth.status]);

	props.setHeader(false);
	return (
		<div className={s.container}>
			<div className={s.block}>
				<h1 className={s.caption}>Авторизація</h1>
				<Form
					main={formData()}
					btns={[
						{
							title: 'Вхід до аккаунту',
							type: 'submit',
							post: 'login',
							onclick: () =>
								setTimeout(
									() =>
										Auth.status === 'anonym' ? console.log(0) : navigate('/'),
									1000
								),
						},
					]}
				/>
				<Link className={s.link} to='/registration'>
					Зареєструватися
				</Link>
			</div>
		</div>
	);
};
export default Login;
