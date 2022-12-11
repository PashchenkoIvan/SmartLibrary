import { useState } from 'react';
import AnnualReportingTable from './AnnualReportingTable/AnnualReportingTable';

const AnnualReporting = props => {
	const [annualReporting, setAnnualReporting] = useState(props.annualReporting);
	return (
		<div>
			<AnnualReportingTable annualReporting={annualReporting} />
		</div>
	);
};

export default AnnualReporting;
