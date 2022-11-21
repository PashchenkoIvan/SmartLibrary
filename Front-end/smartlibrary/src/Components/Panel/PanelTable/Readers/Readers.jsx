import s from './Readers.module.css';
import ReadersTable from './ReadersTable/ReadersTable';
import ReadersInfo from './ReadersInfo/ReadersInfo';

const Readers = props => {
	return (
		<div className={s.container}>
			<ReadersInfo />
			<ReadersTable readers={props.readers} />
		</div>
	);
};

export default Readers;
