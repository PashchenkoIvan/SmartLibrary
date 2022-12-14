import { useState } from 'react';

import tableData from './tableData';
import AffiliatesTable from './AffiliatesTable/AffiliatesTable';
import Table from '../../../Table/Table';

const Affiliates = props => {
	const [affiliates, setAffiliates] = useState(props.affiliates);
	return (
		<div>
			{/* <AffiliatesTable affiliates={affiliates} /> */}
			<Table data={affiliates} keys={tableData()} />
		</div>
	);
};

export default Affiliates;
