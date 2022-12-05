import React from 'react';
import EventReportsTable from './EventReportsTable/EventReportsTable';

const EventReports = props => {
	return (
		<div>
			<EventReportsTable eventReporting={props.eventReporting} />
		</div>
	);
};

export default EventReports;
