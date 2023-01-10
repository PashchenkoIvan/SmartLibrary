import { useContext, useEffect, useState } from 'react';

import { AdminContext } from '../../Panel';
import ReadersInfo from './ReadersInfo/ReadersInfo';
import ReadersTable from './ReadersTable/ReadersTable';

import s from './Readers.module.css';


const Readers = () => {
	const Admin = useContext(AdminContext);

	const [readers, setReaders] = useState([]);
	const [allReaders, setAllReaders] = useState([]);

	useEffect(() => {
		Admin.AdminService.GetReaders().then(res => {
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
