import { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import CreateEvent from '../CreateEvent/CreateEvent';
import s from './ActivitiesSearch.module.css';

const ActivitiesSearch = ({ setActivities, activities }) => {
	const [dates, setDates] = useState({
		from: 'Відфільтрувати з',
		to: 'Відфільтрувати по',
	});

	useEffect(() => {
		setActivities(prev =>
			dates.from != 'Відфільтрувати з' && dates.to != 'Відфільтрувати по'
				? activities.filter(a => {
						return (
							Date.parse(dates.from + ' 00:00:00 GMT') <
								Date.parse(
									a.dateTime
										.replace('/', '-')
										.replace('/', '-')
										.replace('AM', 'GMT')
								) &&
							Date.parse(
								a.dateTime
									.replace('/', '-')
									.replace('/', '-')
									.replace('AM', 'GMT')
							) < Date.parse(dates.to + ' 00:00:00 GMT')
						);
				  })
				: prev
		);
	}, [dates]);

	return (
		<div className={s.container}>
			<div className={s.filters}>
				<input
					type='date'
					value={dates.from}
					onChange={e => setDates({ ...dates, from: e.target.value })}
				/>
				<input
					type='date'
					value={dates.to}
					onChange={e => setDates({ ...dates, to: e.target.value })}
				/>
			</div>
			<Popup trigger={<button className={s.addActivity}>+ Додати захід</button>} modal>
				{close => (
					<CreateEvent close={close} />
				)}
			</Popup>
		</div>
	);
};

export default ActivitiesSearch;
