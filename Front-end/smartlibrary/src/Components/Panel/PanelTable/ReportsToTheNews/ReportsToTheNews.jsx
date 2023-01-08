import tableData from './tableData';
import s from './ReportsToTheNews.module.css';
import Table from '../../../Table/Table';

export let Array = [
	{ id: 1, threme: 'Мета', place: 'st.Darnitskaya 19', date: '03.12.2022' },
];

const ReportsToTheNews = () => {
	return (
		<div className={s.tableContainer}>
			<Table data={Array} keys={tableData()} />
		</div>
	);
};

export default ReportsToTheNews;
