import { useEffect } from 'react';
import { Form } from '../../Components/index';

import s from './regPage.module.css';
import formData from './formData';
import { Link } from 'react-router-dom';

const RegPage = props => {
	useEffect(() => {
		document.title = 'Вхід';
	}, []);
	props.setHeader(false);
	return (
		<div className={s.container}>
			<div className={s.block}>
				<h1 className={s.caption}>Реєстрація</h1>
				<Form main={formData()} btns={[{title: "Зареєструвати", type: "submit"}]} />
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
