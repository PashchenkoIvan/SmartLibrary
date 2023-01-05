import { useContext, useEffect, useState } from 'react';

import s from './Readers.module.css';
import tableData from './tableData';
import ReadersInfo from './ReadersInfo/ReadersInfo';
import Table from '../../../Table/Table';
import { AdminContext } from '../../Panel';

const Readers = () => {
	const Admin = useContext(AdminContext);

	const [readers, setReaders] = useState([]);
	const [allReaders, setAllReaders] = useState([]);

	useEffect(() => {
		Admin.AdminRequests.GetReaders().then(res => {
			setAllReaders(res.data);
			setReaders(res.data);
			console.log(res.data);
		});
	}, []);

	return (
		<div className={s.container}>
			<ReadersInfo readers={allReaders} setReaders={setReaders} />
			<div className={s.tableContainer}>
				<Table data={readers} keys={tableData()} />
			</div>
		</div>
	);
};

export default Readers;
