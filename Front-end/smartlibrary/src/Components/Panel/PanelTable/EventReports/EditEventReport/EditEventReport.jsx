import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import FieldsList from '../../../../FieldsList/FieldsList';
import s from './EditEventReport.module.css';
import fieldsData from './fieldsData';

const EditEventReport = props => {
	props.setHeader(false);
	const { id } = useParams();

	let initState = {};

	props.reports.forEach(r => {
		if (r.id == id) {
			initState = {
				id: id,
				target: r.target,
				place: r.place,
				attends: r.attends,
				techUse: r.techUse,
				efficiency: r.efficiency,
				formOfWork: r.formOfWork,
				responsibles: r.responsibles,
				conclusions: r.conclusions,
				usedBooks: r.usedBooks,
				participants: r.participants,
			};
		}
	});

	const [eventReport, setEventReport] = useState(initState);

	return (
		<div className={s.container}>
			<div className={s.header}>
				<h1>Звіт до заходу</h1>
				<Link to='/admin/event-reporting'>Повернутися</Link>
			</div>
			<FieldsList data={fieldsData(initState)} />
			<button>Редагувати звіт</button>
		</div>
	);
};

export default EditEventReport;
