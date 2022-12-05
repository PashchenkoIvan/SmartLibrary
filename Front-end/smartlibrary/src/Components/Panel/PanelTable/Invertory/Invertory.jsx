import React from 'react';
import InvertorySearch from './InvertorySearch/InvertorySearch';
import InvertoryTable from './InvertoryTable/InvertoryTable';

const Invertory = props => {
	return (
		<div>
			<InvertorySearch />
			<InvertoryTable invertory={props.invertory} />
		</div>
	);
};

export default Invertory;
