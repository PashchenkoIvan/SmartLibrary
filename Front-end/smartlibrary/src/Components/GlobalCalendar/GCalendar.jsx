import s from './GCalendar.module.css';
import React from 'react';
import NewsBlock from './NewsBlock/NewsBlock';
import { useState } from 'react';
import { useEffect } from 'react';
import Calendar from 'react-calendar';

const GCalendar = () => {
	let News = [
		{
			date: 'Thu Dec 15 2022 00:00:00 GMT+0200 (Восточная Европа, стандартное время)',
			news: 'Сьогодні четверг',
		},
		{
			date: 'Tue Dec 13 2022 00:00:00 GMT+0200 (Восточная Европа, стандартное время)',
			news: 'Сьогодні вівторок',
		},
		{
			date: 'Wed Dec 14 2022 00:00:00 GMT+0200 (Восточная Европа, стандартное время)',
			news: 'Сьгодні середа',
		},
	];

	const [value, setValue] = useState('');
	const [news, setNews] = useState('');

	let href = false;

	const func = () => {
		if (window.location.href == 'http://localhost:3000/admin/readers') {
			href = true;
		}
		return href;
	};
	useEffect(() => {
		News.forEach(n => {
			if (Date.parse(value) == Date.parse(n.date)) {
				setNews(n.news);
			}
			// else {
			// 	setNews('За цей день немає новин')
			// }
		});
		{
			func();
		}
	});
	return (
		<div className={s.container}>
			<div className={s.calendarBlock}>
				<div className={s.calendar}>
					<Calendar
						onClickDay={value => {
							setValue(value);
							alert(value);
						}}
					/>
				</div>
				<div className={s.newsBlock}>
					<NewsBlock new={news} AdminPage={func()} />
				</div>
			</div>
		</div>
	);
};

export default GCalendar;
