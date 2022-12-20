import { Link } from 'react-router-dom';

import tableData from './tableData';
import s from './ReportsToTheNews.module.css';
import Table from '../../../Table/Table';

export let Array = [
	{ threme: 'Мета', place: 'st.Darnitskaya 19', date: '03.12.2022' },
];

const Block = props => {
	return (
		<div className={s.infoBlock}>
			<p>{props.name}</p>
			<p>{props.home}</p>
			<p>{props.birthday}</p>
			<Link to='/admin/reports-to-the-news/form'>Редагувати</Link>
			<button>Видалити</button>
		</div>
	);
};

const ReportsToTheNews = () => {
	let ArrayAdd = Array.map(e => (
		<Block name={e.threme} home={e.place} birthday={e.date} />
	));
	return (
		<div className={s.tableContainer}>
			<Table data={Array} keys={tableData()} />
		</div>
	);
};

export default ReportsToTheNews;
