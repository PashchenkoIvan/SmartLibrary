import { useState } from 'react';
import LibrariansTable from './LibrariansTable/LibrariansTable';

const Librarians = props => {
	const [librarians, setLibrarians] = useState(props.librarians);
	return (
		<div>
			<LibrariansTable librarians={librarians} />
		</div>
	);
};

export default Librarians;
