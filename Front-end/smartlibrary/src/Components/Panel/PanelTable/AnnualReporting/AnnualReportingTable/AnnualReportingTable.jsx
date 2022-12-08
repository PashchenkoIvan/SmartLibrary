import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './AnnualReportingTable.module.css';

const AnnualReportingTable = props => {
	const [annualReports, setAnnualReports] = useState(props.annualReporting);
	let annualReportsElements = annualReports.map(r => {
		return (
			<div className={s.row}>
				<div>{r.name}</div>
				{r.isCreated ? (
					<Link to={'/admin/annual-reports/download/' + r.id}>Скачати</Link>
				) : (
					<Link to={'/admin/annual-reports/create/' + r.id}>Генерувати</Link>
				)}
			</div>
		);
	});

	return (
		<div className={s.container}>
			<div className={s.header}>
				<p>Назва ({annualReports.length})</p>
			</div>
			<div className={s.main}>{annualReportsElements}</div>
		</div>
	);
};

export default AnnualReportingTable;
