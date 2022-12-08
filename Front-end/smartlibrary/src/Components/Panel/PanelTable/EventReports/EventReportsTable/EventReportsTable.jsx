import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './EventReportsTable.module.css';

const EventReportsTable = props => {
	const [eventReports, seteventReporting] = useState(props.eventReporting);

	let eventReportsElements = eventReports.map(e => {
		return (
			<div className={s.row}>
				<div>{e.name}</div>
				<div>{e.date}</div>
				<Link to={'/admin/event-reports/edit/' + e.id}>Подивитися</Link>
			</div>
		);
	});

	return (
		<div className={s.container}>
			<div className={s.header}>
				<p>Назва звіту ({eventReports.length})</p>
				<p>Дата створення</p>
			</div>
			<div className={s.main}>{eventReportsElements}</div>
		</div>
	);
};

export default EventReportsTable;
