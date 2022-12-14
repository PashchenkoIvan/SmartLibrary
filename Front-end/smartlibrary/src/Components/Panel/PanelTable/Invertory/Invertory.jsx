import React, { useState } from 'react';

import tableData from './tableData';
import InvertorySearch from './InvertorySearch/InvertorySearch';
import InvertoryTable from './InvertoryTable/InvertoryTable';
import Table from '../../../Table/Table';

const Invertory = props => {
	const [invertory, setInvertory] = useState(props.invertory);
	return (
		<div>
			<InvertorySearch
				invertory={props.invertory}
				setInvertory={setInvertory}
			/>
			{/* <InvertoryTable invertory={invertory} /> */}
			<Table data={invertory} keys={tableData()} />
		</div>
	);
};

export default Invertory;
