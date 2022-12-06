import s from './AddReaderForm.module.css';
import React, { useState } from 'react';

const Form = () => {
	const [reader, setReader] = useState({
		name: '',
		email: '',
		work: '',
		dateOfBirth: '',
		homeAddress: '',
		phone: '',
		passport: '',
	});

	return (
		<div className={s.container}>
			<form>
				<h2>Додати читача</h2>
				<div className={s.formInput}>
					<p>ПІБ</p>
					<input
						type='text'
						value={reader.name}
						onChange={e => {
							setReader({ ...reader, name: e.target.value });
						}}
					/>
				</div>
				<div className={s.formInput}>
					<p>Email</p>
					<input
						type='text'
						value={reader.email}
						onChange={e => {
							setReader({ ...reader, email: e.target.value });
						}}
					/>
				</div>
				<div className={s.formInput}>
					<p>Місце роботи</p>
					<input
						type='text'
						value={reader.work}
						onChange={e => {
							setReader({ ...reader, work: e.target.value });
						}}
					/>
				</div>
				<div className={s.formInput}>
					<p>Дата народження</p>
					<input
						className={s.dateInput}
						type='date'
						placeholder={reader.dateOfBirth}
						value={reader.dateOfBirth}
						onChange={e => {
							setReader({ ...reader, dateOfBirth: e.target.value });
						}}
					/>
				</div>
				<div className={s.formInput}>
					<p>Домашня адреса</p>
					<input
						type='text'
						value={reader.homeAddress}
						onChange={e => {
							setReader({ ...reader, homeAddress: e.target.value });
						}}
					/>
				</div>
				<div className={s.formInput}>
					<p>Телефон (за згодою)</p>
					<input
						type='text'
						value={reader.phone}
						onChange={e => {
							setReader({ ...reader, phone: e.target.value });
						}}
					/>
				</div>
				<div className={s.formInput}>
					<p>Паспорт (за згодою)</p>
					<input
						type='text'
						value={reader.passport}
						onChange={e => {
							setReader({ ...reader, passport: e.target.value });
						}}
					/>
				</div>
				<button className={s.addReader}>Додати читача</button>
			</form>
		</div>
	);
};
export default Form;
