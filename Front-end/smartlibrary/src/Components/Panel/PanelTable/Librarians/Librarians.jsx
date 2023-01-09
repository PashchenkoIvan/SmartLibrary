import { useState } from 'react';

import LibrariansTable from './LibrariansTable/LibrariansTable';

import s from './Librarians.module.css';


const Librarians = props => {
	const [librarians, setLibrarians] = useState(props.librarians);
	return (
		<div className={s.tableContainer}>
			<LibrariansTable librarians={librarians} />
		</div>
	);
};

export default Librarians;
