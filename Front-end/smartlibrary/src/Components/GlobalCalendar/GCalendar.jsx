import s from './GCalendar.module.css';
import React from 'react'
import NewsBlock from './NewsBlock/NewsBlock';
import { useState } from 'react';
import { useEffect } from 'react';
import Calendar from 'react-calendar';

const GCalendar = () => {
    let News = [
		{date: 'Thu Dec 15 2022 00:00:00 GMT+0200 (Восточная Европа, стандартное время)', news: 'Мы купили арбуз',},
		{date: 'Tue Dec 13 2022 00:00:00 GMT+0200 (Восточная Европа, стандартное время)', news: 'Мы купили арбуз во вторник',},
	]

	const [value, setValue] = useState('');
	const [news, setNews] = useState('');

	useEffect(() => {
		News.forEach(n => {
			if (Date.parse(value) == Date.parse(n.date)) setNews(n.news);		
		}) 
	})
  return (
    <div className={s.container}>
            <div className={s.calendarBlock}>
				<div className={s.calendar}>
					<Calendar onClickDay={(value) => {setValue(value)}}/>
				</div>
				<div className={s.newsBlock}>
					<NewsBlock new={news}/>
				</div>
			</div>
    </div>
  )
}

export default GCalendar