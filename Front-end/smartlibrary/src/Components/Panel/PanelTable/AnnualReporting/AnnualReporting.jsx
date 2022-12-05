import React from 'react';
import AnnualReportingTable from './AnnualReportingTable/AnnualReportingTable';

const AnnualReporting = props => {
	return (
		<div>
			<AnnualReportingTable annualReporting={props.annualReporting} />
		</div>
	);
};

export default AnnualReporting;
