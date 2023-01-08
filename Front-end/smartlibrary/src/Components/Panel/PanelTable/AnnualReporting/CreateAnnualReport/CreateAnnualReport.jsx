import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import s from './CreateAnnualReport.module.css';
import f from '../../../../../assets/styles/form.module.css';

const CreateAnnualReport = props => {
	props.setHeader(false);
	const { id } = useParams();

	let initState = {};

	props.annualReports.forEach(r => {
		if (id == r.id) {
			initState = {
				id: id,
				name: r.name,
				dateFrom: '',
				dateTo: '',
			};
		}
	});

	const [report, setReport] = useState(initState);

	return (
		<div className={s.container}>
			<div className={s.header}>
				<Link to='/admin/annual-reporting'>Повернутись</Link>
				<h1>Підготовка звіту</h1>
			</div>
			<form
				className={f.form}
				onSubmit={e => {
					e.preventDefault();
					console.log(report);
					// Promise.resolve(
					// 	Services.AuthService.Login({
					// 		email: state.email,
					// 		password: state.password,
					// 	})
					// ).then(res => {});
				}}
			>
				<ul className={f.fieldsList}>
					<li className={f.fieldBlock}>
						<label>Назва репорту</label>
						<input
							type='text'
							value={report.name}
							name='name'
							onChange={e =>
								setReport({
									...report,
									name: e.target.value,
								})
							}
						/>
					</li>
					<li className={f.fieldBlock}>
						<label>Дата с</label>
						<input
							type='date'
							value={report.dateFrom}
							name='dateFrom'
							onChange={e =>
								setReport({
									...report,
									dateFrom: e.target.value,
								})
							}
						/>
					</li>
					<li className={f.fieldBlock}>
						<label>Дата до</label>
						<input
							type='date'
							value={report.dateTo}
							name='dateTo'
							onChange={e =>
								setReport({
									...report,
									dateTo: e.target.value,
								})
							}
						/>
					</li>
				</ul>
				<div className={f.btns}>
					<input
						className={f.btn}
						type='reset'
						value='Генерувати'
						onClick={() =>
							console.log('Generated!')
						}
					/>
					<input
						className={f.btn}
						type='submit'
						value='Відправити'
						onClick={() =>
							console.log('Sended!')
						}
					/>
				</div>
			</form>
		</div>
	);
};

export default CreateAnnualReport;
