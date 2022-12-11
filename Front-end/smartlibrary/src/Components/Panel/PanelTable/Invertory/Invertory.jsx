import React, { useState } from 'react';
import InvertorySearch from './InvertorySearch/InvertorySearch';
import InvertoryTable from './InvertoryTable/InvertoryTable';

const Invertory = props => {
	const [invertory, setInvertory] = useState(props.invertory);
	return (
		<div>
			<InvertorySearch
				invertory={props.invertory}
				setInvertory={setInvertory}
			/>
			<InvertoryTable invertory={invertory} />
		</div>
	);
};

export default Invertory;
