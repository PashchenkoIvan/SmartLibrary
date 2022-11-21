import s from './Readers.module.css';
import ReadersTable from './ReadersTable/ReadersTable';
import ReadersInfo from './ReadersInfo/ReadersInfo';

const Readers = props => {
	return (
		<div className={s.container}>
			<ReadersInfo />
			<ReadersTable />
		</div>
	);
};

export default Readers;
