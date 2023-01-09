import { useState } from 'react';

import ActivitiesSearch from './ActivitiesSearch/ActivitiesSearch';
import ActivitiesTable from './ActivitiesTable/ActivitiesTable'

import s from './Activites.module.css';


const Activites = props => {
	const [activities, setActivities] = useState(props.activities);
	return (
		<div>
			<ActivitiesSearch
				setActivities={setActivities}
				activities={props.activities}
			/>
			<div className={s.tableContainer}>
				<ActivitiesTable activities={activities} />
			</div>
		</div>
	);
};

export default Activites;
