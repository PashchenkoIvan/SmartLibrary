import { useState } from 'react';

import tableData from './tableData';
import Table from '../../../Table/Table';

import s from './AnnualReporting.module.css';

const AnnualReporting = props => {
	const [annualReporting, setAnnualReporting] = useState(props.annualReporting);
	return (
		<div className={s.tableContainer}>
			<Table data={annualReporting} keys={tableData()} />
		</div>
	);
};

export default AnnualReporting;
