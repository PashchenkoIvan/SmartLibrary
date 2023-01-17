import { useContext, useEffect, useState } from 'react';

import ReadersInfo from './ReadersInfo/ReadersInfo';
import ReadersTable from './ReadersTable/ReadersTable';

import s from './Readers.module.css';
import { ServicesContext } from '../../../..';
import { useSelector } from 'react-redux';

const Readers = () => {
	const Services = useContext(ServicesContext);

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
