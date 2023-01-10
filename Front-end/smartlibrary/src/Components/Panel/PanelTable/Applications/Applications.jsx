import { useState } from 'react';

import ApplicationsTable from './ApplicationsTable/ApplicationsTable';

import s from './Applications.module.css';

const Applications = props => {
	const [applications, setApplications] = useState(props.applications);
	return (
		<div className={s.tableContainer}>
			<ApplicationsTable applications={applications} />
		</div>
	);
};

export default Applications;
