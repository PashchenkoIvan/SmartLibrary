import React, { useState } from 'react';
import s from './ApplicationsTable.module.css';
import qrCode from '../../../img/qricon.png';

const ApplicationsTable = props => {
	const [applications, setApplications] = useState(props.applications);
	let applicationsElements = applications.map(a => {
		return (
			<div className={s.row}>
				<div>{a.name}</div>
				<div>{a.book}</div>
				<div>{a.date}</div>
				<div>{a.number}</div>
				<div>
					<img src={qrCode} alt='qr-code' />
				</div>
			</div>
		);
	});
	return (
		<div className={s.container}>
			<div className={s.header}>
				<p>ПІБ</p>
				<p>Книга</p>
				<p>Дата</p>
				<p>Інвентарний номер</p>
				<p>QR-код</p>
			</div>
			<div className={s.main}>{applicationsElements}</div>
		</div>
	);
};

export default ApplicationsTable;
