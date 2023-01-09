import { useState } from 'react';

import AffiliatesTable from './AffiliatesTable/AffiliatesTable';

import s from './Affiliates.module.css';


const Affiliates = props => {
	const [affiliates, setAffiliates] = useState(props.affiliates);
	return (
		<div className={s.tableContainer}>
			<AffiliatesTable affiliates={affiliates} />
		</div>
	);
};

export default Affiliates;
