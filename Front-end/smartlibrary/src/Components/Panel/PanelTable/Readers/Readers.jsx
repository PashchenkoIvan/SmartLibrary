import { useState } from 'react';

import s from './Readers.module.css';
import tableData from './tableData';
import ReadersTable from './ReadersTable/ReadersTable';
import ReadersInfo from './ReadersInfo/ReadersInfo';
import Table from '../../../Table/Table';

const Readers = props => {
	const [readers, setReaders] = useState(props.readers);

	return (
		<div className={s.container}>
			<ReadersInfo readers={props.readers} setReaders={setReaders} />
			<div className={s.tableContainer}>
				<Table data={readers} keys={tableData()} />
			</div>
		</div>
	);
};

export default Readers;
