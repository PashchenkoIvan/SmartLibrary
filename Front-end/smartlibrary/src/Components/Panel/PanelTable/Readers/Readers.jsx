import { useContext, useEffect, useState } from 'react';

import ReadersInfo from './ReadersInfo/ReadersInfo';
import ReadersTable from './ReadersTable/ReadersTable';

import s from './Readers.module.css';
import { ServicesContext } from '../../../..';

const Readers = () => {
	const Services = useContext(ServicesContext);

	const [readers, setReaders] = useState([]);
	const [allReaders, setAllReaders] = useState([]);

	useEffect(() => {
		Services.AdminService.GetReaders().then(res => {
			setAllReaders(res.data);
			setReaders(res.data);
		});
	}, []);

	return (
		<div className={s.container}>
			<ReadersInfo readers={allReaders} setReaders={setReaders} />
			<div className={s.tableContainer}>
				<ReadersTable readers={readers} />
			</div>
		</div>
	);
};

export default Readers;
