import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './AnnualReportingTable.module.css';

const AnnualReportingTable = props => {
	const [annualReports, setAnnualReports] = useState(props.annualReporting);
	let annualReportsElements = annualReports.map(r => {
		let pathCreate = `/LibraryAnnualReports/Create/${r.id}`;
		let pathDownload = `/LibraryAnnualReports/DownloadFile/${r.id}`;
		return (
			<div className={s.row}>
				<div>{r.name}</div>
				{r.isCreated ? (
					<Link to={pathDownload}>Скачати</Link>
				) : (
					<Link to={pathCreate}>Генерувати</Link>
				)}
			</div>
		);
	});

	return (
		<div className={s.container}>
			<div className={s.header}>
				<p>Назва</p>
			</div>
			<div className={s.main}>{annualReportsElements}</div>
		</div>
	);
};

export default AnnualReportingTable;
