import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import FieldsList from '../../../../FieldsList/FieldsList';
import s from './CreateAnnualReport.module.css';
import fieldsData from './fieldsData';

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
				<h1>Підготовка звіту</h1>
				<Link to='/admin/annual-reporting'>Повернутись</Link>
			</div>
			<FieldsList data={fieldsData(report)} />
			<div className={s.buttons}>
				<button>Генерувати</button>
				<button>Відправити</button>
			</div>
		</div>
	);
};

export default CreateAnnualReport;
