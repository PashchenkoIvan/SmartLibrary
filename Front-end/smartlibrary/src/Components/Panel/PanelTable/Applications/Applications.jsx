import React from 'react';
import ApplicationsTable from './ApplicationsTable/ApplicationsTable';

const Applications = props => {
	return (
		<div>
			<ApplicationsTable applications={props.applications} />
		</div>
	);
};

export default Applications;
