import { useState } from 'react';

import tableData from './tableData';
import Table from '../../../Table/Table';

import s from './EventReports.module.css';

const EventReports = props => {
	const [eventReporting, seteventReporting] = useState(props.eventReporting);
	return (
		<div className={s.tableContainer}>
			<Table data={eventReporting} keys={tableData()} />
		</div>
	);
};

export default EventReports;
