import React, { useState } from 'react';
import s from './ActivitiesSearch.module.css';

const ActivitiesSearch = () => {
	const [dates, setDates] = useState({
		from: 'Відфільтрувати з',
		to: 'Відфільтрувати по',
	});

	return (
		<div className={s.container}>
			<div className={s.filters}>
				<input
					type='date'
					placeholder={dates.from}
					onChange={e => setDates({ ...dates, from: e.target.value })}
				/>
				<input
					type='date'
					placeholder={dates.to}
					onChange={e => setDates({ ...dates, to: e.target.value })}
				/>
			</div>
			<button className={s.addActivity}>+ Додати захід</button>
		</div>
	);
};

export default ActivitiesSearch;
