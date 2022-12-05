import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './ActivitiesTable.module.css';

const ActivitiesTable = props => {
	const [activities, setActivities] = useState(props.activities);
	let activitiesElements = activities.map(a => {
		return (
			<div className={s.row}>
				<div>{a.name}</div>
				<div>{a.category}</div>
				<div>{a.dateTime}</div>
				<div>
					<button>Редагувати</button>
				</div>
				<div>
					<button>Видалити</button>
				</div>
				<Link>Створити звіт</Link>
			</div>
		);
	});
	return (
		<div className={s.container}>
			<div className={s.header}>
				<p>Назва заходу</p>
				<p>Категорія</p>
				<p>Дата та час проведення</p>
			</div>
			<div className={s.main}>{activitiesElements}</div>
		</div>
	);
};

export default ActivitiesTable;
