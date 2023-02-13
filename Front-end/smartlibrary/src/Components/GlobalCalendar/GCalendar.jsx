import s from './GCalendar.module.css';
import React from 'react';
import NewsBlock from './NewsBlock/NewsBlock';
import { useState } from 'react';
import { useEffect } from 'react';
import Calendar from 'react-calendar';
import './CalendarStyle.css';
import axios from "axios";

const GCalendar = () => {

	const [data, setData] = useState([]);
	const [news, setNews] = useState('');

	useEffect(() => {
		axios.get("https://ualib-orion.herokuapp.com/api/v1/events/")
			.then(function (responce) {
				setData(responce.data)
			})
	},[])

	let href = false;

	const func = () => {
		if (window.location.href.match(/\/admin\/./)) {
			href = true;
		}
		return href;
	};
	return (
		<div className={s.container}>
			<div className={s.calendarBlock}>
				<div className={s.calendar}>
					<Calendar
						onClickDay={value => {
							const date = new Date(value);
							let valueData = `${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()}`;

							console.log(valueData);
							console.log(value)

							const dataMap = data.map((res) => res.description);
							const index = data.findIndex(event => event.date === valueData);

							if (index != -1){
								console.log(data[index])
								setNews(dataMap[index])
							}
							else{
								setNews('Not today')
							}
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
