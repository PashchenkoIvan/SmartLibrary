import { useState } from 'react';
import { useSelector } from 'react-redux';

import ReadersInfo from './ReadersInfo/ReadersInfo';
import ReadersTable from './ReadersTable/ReadersTable';

import s from './Readers.module.css';

const Readers = () => {
	const globalReaders = useSelector(state => state.readers);

	const [readers, setReaders] = useState([]);

	return (
		<div className={s.container}>
			<ReadersInfo readers={globalReaders.readers} setReaders={setReaders} />
			<div className={s.tableContainer}>
				{globalReaders.loading ? <div /> : <ReadersTable readers={readers} />}
			</div>
		</div>
	);
};

export default Readers;
