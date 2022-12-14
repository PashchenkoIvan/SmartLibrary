import { useState } from 'react';

import tableData from './tableData';
import EventReportsTable from './EventReportsTable/EventReportsTable';
import Table from '../../../Table/Table';

const EventReports = props => {
	const [eventReporting, seteventReporting] = useState(props.eventReporting);
	return (
		<div>
			{/* <EventReportsTable eventReporting={eventReporting} /> */}
			<Table data={eventReporting} keys={tableData()} />
		</div>
	);
};

export default EventReports;
