import React from 'react';
import LibrariansTable from './LibrariansTable/LibrariansTable';

const Librarians = props => {
	return (
		<div>
			<LibrariansTable librarians={props.librarians} />
		</div>
	);
};

export default Librarians;
