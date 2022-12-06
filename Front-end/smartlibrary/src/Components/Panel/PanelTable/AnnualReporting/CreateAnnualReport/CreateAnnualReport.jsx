import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import s from './CreateAnnualReport.module.css';

const CreateAnnualReport = () => {
	const { id } = useParams();
	const [report, setReport] = useState({
		id: id,
		name: '',
		dateFrom: '',
		dateTo: '',
	});
	return (
		<div className={s.container}>
			<div className={s.header}>
				<h1>Підготовка звіту</h1>
				<Link to='/admin/annual-reporting'>Повернутись</Link>
			</div>
			<label>
				<p>Назва репорту</p>
				<input
					type='text'
					value={report.name}
					onChange={e => setReport({ ...report, name: e.target.value })}
				/>
			</label>
			<label>
				<p>Дата с</p>
				<input
					className={s.dateInput}
					type='date'
					value={report.dateFrom}
					onChange={e => setReport({ ...report, dateFrom: e.target.value })}
				/>
			</label>
			<label>
				<p>Дата по</p>
				<input
					className={s.dateInput}
					type='date'
					value={report.dateTo}
					onChange={e => setReport({ ...report, dateTo: e.target.value })}
				/>
			</label>
			<div className={s.buttons}>
				<button>Генерувати</button>
				<button>Відправити</button>
			</div>
		</div>
	);
};

export default CreateAnnualReport;
