import { React, useState } from 'react';

import tableData from './tableData';
import ApplicationsTable from './ApplicationsTable/ApplicationsTable';
import Table from '../../../Table/Table';

const Applications = props => {
	const [applications, setApplications] = useState(props.applications);
	return (
		<div>
			{/* <ApplicationsTable applications={applications} /> */}
			<Table data={applications} keys={tableData()} />
		</div>
	);
};

export default Applications;
