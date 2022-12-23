import { useState } from 'react';

import tableData from './tableData';
import ActivitiesSearch from './ActivitiesSearch/ActivitiesSearch';
import Table from '../../../Table/Table';

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
				<Table data={activities} keys={tableData()} />
			</div>
		</div>
	);
};

export default Activites;
