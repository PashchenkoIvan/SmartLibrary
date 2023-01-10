import ReportsToTheNewsTable from './ReportsToTheNewsTable/ReportsToTheNewsTable';
import s from './ReportsToTheNews.module.css';


const ReportsToTheNews = () => {
	const newsReports = [
		{ id: 1, threme: 'Мета', place: 'st.Darnitskaya 19', date: '03.12.2022' },
	];

	return (
		<div className={s.tableContainer}>
			<ReportsToTheNewsTable reportsToTheNews={newsReports} />
		</div>
	);
};

export default ReportsToTheNews;
