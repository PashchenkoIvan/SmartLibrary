import { useState } from 'react';

import tableData from './tableData';
import AnnualReportingTable from './AnnualReportingTable/AnnualReportingTable';
import Table from '../../../Table/Table';

const AnnualReporting = props => {
	const [annualReporting, setAnnualReporting] = useState(props.annualReporting);
	return (
		<div>
			{/* <AnnualReportingTable annualReporting={annualReporting} /> */}
			<Table data={annualReporting} keys={tableData()} />
		</div>
	);
};

export default AnnualReporting;
