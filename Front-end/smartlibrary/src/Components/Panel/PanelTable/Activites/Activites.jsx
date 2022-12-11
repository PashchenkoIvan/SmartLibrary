import { useState } from 'react';
import ActivitiesSearch from './ActivitiesSearch/ActivitiesSearch';
import ActivitiesTable from './ActivitiesTable/ActivitiesTable';

const Activites = props => {
	const [activities, setActivities] = useState(props.activities);
	return (
		<div>
			<ActivitiesSearch
				setActivities={setActivities}
				activities={props.activities}
			/>
			<ActivitiesTable activities={activities} />
		</div>
	);
};

export default Activites;
