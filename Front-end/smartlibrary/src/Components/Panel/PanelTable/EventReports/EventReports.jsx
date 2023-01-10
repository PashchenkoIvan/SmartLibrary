import { useState } from 'react';

import EventReportsTable from './EventReportsTable/EventReportsTable'

import s from './EventReports.module.css';

const EventReports = props => {
	const [eventReporting, seteventReporting] = useState(props.eventReporting);
	return (
		<div className={s.tableContainer}>
			<EventReportsTable eventReporting={eventReporting} />
		</div>
	);
};

export default EventReports;
