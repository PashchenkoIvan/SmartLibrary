import React from 'react';
import s from './ActivitiesSearch.module.css';

const ActivitiesSearch = () => {
	return (
		<div className={s.container}>
			<div className={s.filters}>
				<input type='datetime-local' />
				<input type='datetime-local' />
			</div>
			<button className={s.addActivity}>+ Додати захід</button>
		</div>
	);
};

export default ActivitiesSearch;
