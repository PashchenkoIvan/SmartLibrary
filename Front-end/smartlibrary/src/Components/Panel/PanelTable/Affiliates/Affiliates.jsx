import React from 'react';
import AffiliatesTable from './AffiliatesTable/AffiliatesTable';

const Affiliates = props => {
	return (
		<div>
			<AffiliatesTable affiliates={props.affiliates} />
		</div>
	);
};

export default Affiliates;
