import { useState } from 'react';

import tableData from './tableData';
import ActivitiesSearch from './ActivitiesSearch/ActivitiesSearch';
import ActivitiesTable from './ActivitiesTable/ActivitiesTable';
import Table from '../../../Table/Table';

const Activites = props => {
	const [activities, setActivities] = useState(props.activities);
	return (
		<div>
			<ActivitiesSearch
				setActivities={setActivities}
				activities={props.activities}
			/>
			{/* <ActivitiesTable activities={activities} /> */}
			<Table data={activities} keys={tableData()} />
		</div>
	);
};

export default Activites;
