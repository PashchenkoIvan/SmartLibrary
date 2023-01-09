import React, { useState } from 'react';

import InvertorySearch from './InvertorySearch/InvertorySearch';
import InvertoryTable from './InvertoryTable/InvertoryTable';

import s from './Invertory.module.css';

const Invertory = props => {
	const [invertory, setInvertory] = useState(props.invertory);
	return (
		<div>
			<InvertorySearch
				invertory={props.invertory}
				setInvertory={setInvertory}
			/>
			<div className={s.tableContainer}>
				<InvertoryTable invertory={invertory} />
			</div>
		</div>
	);
};

export default Invertory;
