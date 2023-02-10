import { React, useState } from 'react';

import { useContext } from 'react';
import { AdminContext } from '../../../../Panel';

import s from './AddReaderForm.module.css';
import sp from '../../../../../../assets/styles/popUp.module.css';
import f from '../../../../../../assets/styles/form.module.css';
import { ServicesContext } from '../../../../../..';
import { useDispatch } from 'react-redux';
import { SetMessage } from '../../../../../../redux/actions/messageActions';
import {FetchReaders, FetchReadersSuccess} from "../../../../../../redux/actions/readersActions";
import AdminService from "../../../../../../services/AdminService";

const AddReaderForm = props => {
	const Services = useContext(ServicesContext);
	const dispatch = useDispatch();
	const [reader, setReader] = useState({
		full_name: '',
		email: '',
		work_address: '',
		// birthday: '',
		home_address: '',
		phone_number: '',
		// passport: '',
	});

	return (
		<div className={s.container}>
			<div className={sp.header}>
				<span>Додати читача</span>
				<button className={sp.closeBtn} onClick={props.close}>
					×
				</button>
			</div>
			<div className={sp.content}>
				<form
					className={f.form}
					onSubmit={e => {
						e.preventDefault();
						console.log(reader);
						// Promise.resolve(
						//     Auth.AuthService.makeLogin({
						//         email: state.email,
						//         password: state.password,
						//     })
						// ).then(res => (res !== undefined ? (Auth.status = res ? 'librarian' : 'user') : Auth.status = 'anonym'));
					}}
				>
					<ul className={`${f.fieldsList} + ${sp.fields}`}>
						<li className={f.fieldBlock}>
							<label>ПІБ</label>
							<input
								type='text'
								value={reader.full_name}
								name='full_name'
								onChange={e =>
									setReader({
										...reader,
										full_name: e.target.value,
									})
								}
							/>
						</li>
						<li className={f.fieldBlock}>
							<label>Email</label>
							<input
								type='email'
								value={reader.email}
								name='email'
								onChange={e =>
									setReader({
										...reader,
										email: e.target.value,
									})
								}
							/>
						</li>
						<li className={f.fieldBlock}>
							<label>Місце роботи</label>
							<input
								type='text'
								value={reader.work}
								name='work'
								onChange={e =>
									setReader({
										...reader,
										work: e.target.value,
									})
								}
							/>
						</li>
						{/* <li className={f.fieldBlock}>
							<label>Дата народження</label>
							<input
								type='daye'
								value={reader.birthday}
								placeholder={reader.birthday}
								name='birthday'
								onChange={e =>
									setReader({
										...reader,
										birthday: e.target.value,
									})
								}
							/>
						</li> */}
						<li className={f.fieldBlock}>
							<label>Домашня адреса</label>
							<input
								type='text'
								value={reader.home_address}
								name='home_address'
								onChange={e =>
									setReader({
										...reader,
										home_address: e.target.value,
									})
								}
							/>
						</li>
						<li className={f.fieldBlock}>
							<label>Телефон (за згодою)</label>
							<input
								type='text'
								value={reader.phone_number}
								name='phone_number'
								onChange={e =>
									setReader({
										...reader,
										phone_number: e.target.value,
									})
								}
							/>
						</li>
						{/* <li className={f.fieldBlock}>
							<label>Паспорт (за згодою)</label>
							<input
								type='text'
								value={reader.passport}
								name='passport'
								onChange={e =>
									setReader({
										...reader,
										passport: e.target.value,
									})
								}
							/>
						</li> */}
					</ul>
					<div className={f.btns}>
						<input
							className={f.btn}
							type='submit'
							value='Додати читача'
							onClick={e => {
								e.preventDefault();
								console.log(reader);
								Services.AdminService.AddReader(reader)
									.then(() => {
										dispatch(SetMessage('Читача додано', 'success'));
										dispatch(FetchReaders());
										return AdminService.GetReaders();
									})
									.then((res) => {
										dispatch(FetchReadersSuccess(res.data));
										props.close();
									})
									.catch(error => {
										dispatch(SetMessage('Помилка', 'error'));
									});
							}}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};
export default AddReaderForm;
