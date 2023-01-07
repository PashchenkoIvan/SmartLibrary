import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import EventReportForm from '../EventReportForm/EventReportForm'
import s from './CreateEventReport.module.css';

const CreateEventReport = props => {
	useEffect(() => {
		document.title = 'Бібліотекар';
	}, []);
	props.setHeader(false);
	const { id } = useParams();
	const [eventReport, setEventReport] = useState({
		id: id,
		target: '',
		place: '',
		attends: '',
		techUse: '',
		efficiency: '',
		formOfWork: '',
		responsibles: '',
		conclusions: '',
		usedBooks: '',
		participants: '',
	});
	return (
		<div className={s.container}>
			<div className={s.header}>
				<Link to='/admin/activities'>Повернутися</Link>
				<h1>Створення звіту до заходу</h1>
			</div>
			<EventReportForm eventReport={eventReport} isEditing='false' />
		</div>
	);
};

export default CreateEventReport;
