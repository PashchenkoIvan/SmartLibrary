import s from './regPage.module.css';
import React from 'react';

const regPage = props => {
	props.setHeader(false);
	return (
		<div className={s.container}>
			<div className={s.block}>
				<h1>Регістрація</h1>
				<div className={s.inputBlock}>
					<p>ПІБ</p>
					<input type='text' placeholder='ПІБ' />
				</div>
				<div className={s.inputBlock}>
					<p>Серія і номер паспорта (без пробілів)</p>
					<input type='text' placeholder='Серія і номер паспорта' />
				</div>
				<div className={s.inputBlock}>
					<p>Email</p>
					<input type='email' placeholder='Email' />
				</div>
				<div className={s.inputBlock}>
					<p>Пароль</p>
					<input type='password' placeholder='Пароль' />
				</div>
				<button>Регістрація</button>
			</div>
		</div>
	);
};
export default regPage;
