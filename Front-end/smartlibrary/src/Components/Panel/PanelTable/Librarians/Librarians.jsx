import { useState } from 'react';

import tableData from './tableData';
import Table from '../../../Table/Table';

import s from './Librarians.module.css';

const Librarians = props => {
	const [librarians, setLibrarians] = useState(props.librarians);
	return (
		<div className={s.tableContainer}>
			<Table data={librarians} keys={tableData()} />
		</div>
	);
};

export default Librarians;
