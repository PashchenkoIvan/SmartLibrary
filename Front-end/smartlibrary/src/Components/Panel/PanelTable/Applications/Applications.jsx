import { useState } from 'react';
import tableData from './tableData';
import Table from '../../../Table/Table';

import s from './Applications.module.css';

const Applications = props => {
	const [applications, setApplications] = useState(props.applications);
	return (
		<div className={s.tableContainer}>
			{/* <ApplicationsTable applications={applications} /> */}
			<Table data={applications} keys={tableData()} />
		</div>
	);
};

export default Applications;
