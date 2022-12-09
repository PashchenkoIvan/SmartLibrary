import s from './Readers.module.css';
import ReadersTable from './ReadersTable/ReadersTable';
import ReadersInfo from './ReadersInfo/ReadersInfo';
import { useState } from 'react';

const Readers = props => {
	const [readers, setReaders] = useState(props.readers);

	return (
		<div className={s.container}>
			<ReadersInfo readers={props.readers} setReaders={setReaders} />
			<ReadersTable readers={readers} />
		</div>
	);
};

export default Readers;
