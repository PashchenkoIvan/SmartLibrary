import { Routes, Route } from 'react-router-dom';
import s from './PanelTable.module.css';

import Readers from './Readers/Readers';
import Books from './Books/Books';
import Applications from './Applications/Applications';
import Activities from './Activites/Activites';
import EventReporting from './EventReports/EventReports';
import AnnualReporting from './AnnualReporting/AnnualReporting';
import Invertory from './Invertory/Invertory';
import Librarians from './Librarians/Librarians';
import Affiliates from './Affiliates/Affiliates';
import News from './News/News';
import ReportsToTheNews from './ReportsToTheNews/ReportsToTheNews';
import Visitors from './Visitors/Visitors';

const PanelTable = props => {
	return (
		<div className={s.container}>
			<div className={s.table}>
				<Routes>
					<Route
						path='readers'
						element={<Readers readers={props.tables.readers} />}
					/>
					<Route path='books' element={<Books />} />
					<Route path='applications' element={<Applications />} />
					<Route path='activities' element={<Activities />} />
					<Route path='event-reporting' element={<EventReporting />} />
					<Route path='annual-reporting' element={<AnnualReporting />} />
					<Route path='invertory' element={<Invertory />} />
					<Route path='librarians' element={<Librarians />} />
					<Route path='affiliates' element={<Affiliates />} />
					<Route path='news' element={<News />} />
					<Route path='reports-to-the-news' element={<ReportsToTheNews />} />
					<Route path='visitors' element={<Visitors />} />
				</Routes>
			</div>
		</div>
	);
};

export default PanelTable;
