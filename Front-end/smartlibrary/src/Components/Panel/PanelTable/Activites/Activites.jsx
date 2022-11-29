import React from 'react';
import ActivitiesSearch from './ActivitiesSearch/ActivitiesSearch';
import ActivitiesTable from './ActivitiesTable/ActivitiesTable';

const Activites = props => {
	return (
		<div>
			<ActivitiesSearch />
			<ActivitiesTable activities={props.activities} />
		</div>
	);
};

export default Activites;
