import { useState } from 'react';

import tableData from './tableData';
import LibrariansTable from './LibrariansTable/LibrariansTable';
import Table from '../../../Table/Table';

const Librarians = props => {
	const [librarians, setLibrarians] = useState(props.librarians);
	return (
		<div>
			{/* <LibrariansTable librarians={librarians} /> */}
			<Table data={librarians} keys={tableData()} />
		</div>
	);
};

export default Librarians;
