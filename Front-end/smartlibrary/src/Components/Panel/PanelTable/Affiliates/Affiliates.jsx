import { useState } from 'react';

import tableData from './tableData';
import Table from '../../../Table/Table';

import s from './Affiliates.module.css';

const Affiliates = props => {
	const [affiliates, setAffiliates] = useState(props.affiliates);
	return (
		<div className={s.tableContainer}>
			<Table data={affiliates} keys={tableData()} />
		</div>
	);
};

export default Affiliates;
