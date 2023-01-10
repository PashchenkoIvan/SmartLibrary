import { useState } from 'react';

import AnnualReportingTable from './AnnualReportingTable/AnnualReportingTable';

import s from './AnnualReporting.module.css';


const AnnualReporting = props => {
	const [annualReporting, setAnnualReporting] = useState(props.annualReporting);
	return (
		<div className={s.tableContainer}>
			<AnnualReportingTable annualReporting={annualReporting} />
		</div>
	);
};

export default AnnualReporting;
