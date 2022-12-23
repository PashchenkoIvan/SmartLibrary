import { useEffect, useContext } from 'react';
import { Form } from '../../Components/index';

import s from './Login.module.css';
import formData from './formData';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../index';


const Login = props => {
	const {store} = useContext(AuthContext);

	useEffect(() => {
		document.title = 'Вхід';
	}, []);
	props.setHeader(false);
	return (
		<div className={s.container}>
			<div className={s.block}>
				<h1 className={s.caption}>Авторизація</h1>
				<Form main={formData()} btns={[{title: "Вхід до аккаунту", type: "submit"}]} />
				<Link
					className={s.link}
					to='/registration'
				>
					Зареєструватися
				</Link>
			</div>
		</div>
	);
};
export default Login;
