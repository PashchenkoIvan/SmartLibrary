import React, { useState } from 'react';

import tableData from './tableData';
import InvertorySearch from './InvertorySearch/InvertorySearch';
import Table from '../../../Table/Table';

import s from './Invertory.module.css';

const Invertory = props => {
	const [invertory, setInvertory] = useState(props.invertory);
	return (
		<div>
			<InvertorySearch
				invertory={props.invertory}
				setInvertory={setInvertory}
			/>
			<div className={s.tableContainer}>
				<Table data={invertory} keys={tableData()} />
			</div>
		</div>
	);
};

export default Invertory;
