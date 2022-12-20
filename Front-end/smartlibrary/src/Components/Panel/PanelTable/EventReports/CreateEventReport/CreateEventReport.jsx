import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Form from '../../../../Form/Form';
import s from './CreateEventReport.module.css';
import fieldsData from './fieldsData';

const CreateEventReport = props => {
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
				<h1>Створення звіту до заходу</h1>
				<Link to='/admin/activities'>Повернутися</Link>
			</div>
			<Form main={fieldsData(eventReport)} btns={[{title: "Додати звіт"}]} />
		</div>
	);
};

export default CreateEventReport;
