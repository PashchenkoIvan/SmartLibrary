import { useState } from 'react';
import EventReportsTable from './EventReportsTable/EventReportsTable';

const EventReports = props => {
	const [eventReporting, seteventReporting] = useState(props.eventReporting);
	return (
		<div>
			<EventReportsTable eventReporting={eventReporting} />
		</div>
	);
};

export default EventReports;
