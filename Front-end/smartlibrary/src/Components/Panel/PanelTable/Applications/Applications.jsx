import { useState } from 'react';
import ApplicationsTable from './ApplicationsTable/ApplicationsTable';

const Applications = props => {
	const [applications, setApplications] = useState(props.applications);
	return (
		<div>
			<ApplicationsTable applications={applications} />
		</div>
	);
};

export default Applications;
