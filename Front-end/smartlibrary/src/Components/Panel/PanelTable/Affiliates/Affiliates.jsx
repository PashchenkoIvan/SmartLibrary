import { useState } from 'react';
import AffiliatesTable from './AffiliatesTable/AffiliatesTable';

const Affiliates = props => {
	const [affiliates, setAffiliates] = useState(props.affiliates);
	return (
		<div>
			<AffiliatesTable affiliates={affiliates} />
		</div>
	);
};

export default Affiliates;
