import { React, useState } from 'react';

import s from './AddReaderForm.module.css';
import sp from '../../Books/BooksTable/SingleBook/popUps.module.css';

const AddReaderForm = (props) => {
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
			<div className={sp.header}>
				<span>Додати читача</span>
				<button className={sp.closeBtn} onClick={props.close}>
					×
				</button>
			</div>
			<form className={sp.content}>
				<div className={s.formInput}>
					<label>ПІБ</label>
					<input
						type='text'
						value={reader.name}
						onChange={e => {
							setReader({ ...reader, name: e.target.value });
						}}
					/>
				</div>
				<div className={s.formInput}>
					<label>Email</label>
					<input
						type='text'
						value={reader.email}
						onChange={e => {
							setReader({ ...reader, email: e.target.value });
						}}
					/>
				</div>
				<div className={s.formInput}>
					<label>Місце роботи</label>
					<input
						type='text'
						value={reader.work}
						onChange={e => {
							setReader({ ...reader, work: e.target.value });
						}}
					/>
				</div>
				<div className={s.formInput}>
					<label>Дата народження</label>
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
					<label>Домашня адреса</label>
					<input
						type='text'
						value={reader.homeAddress}
						onChange={e => {
							setReader({ ...reader, homeAddress: e.target.value });
						}}
					/>
				</div>
				<div className={s.formInput}>
					<label>Телефон (за згодою)</label>
					<input
						type='text'
						value={reader.phone}
						onChange={e => {
							setReader({ ...reader, phone: e.target.value });
						}}
					/>
				</div>
				<div className={s.formInput}>
					<label>Паспорт (за згодою)</label>
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
export default AddReaderForm;
