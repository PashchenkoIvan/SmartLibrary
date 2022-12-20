import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Form from '../../../../Form/Form';
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
			<Form main={fieldsData(report)} btns={[{title: 'Генерувати'}, {title: 'Відправити'}]} />
		</div>
	);
};

export default CreateAnnualReport;
