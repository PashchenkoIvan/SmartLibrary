import s from './MainPage.module.css';
import { PopularBooks } from '../../Components';
import Calendar from 'react-calendar';
import NewsBlock from './NewsBlock/NewsBlock';
import { useState } from 'react';
import { useEffect } from 'react';
// import { useState } from 'react';

const MainPage = props => {
	props.setHeader(true);
	// let [data, setData] = useState({
	// 	date: 'Thu Dec 15 2022 00:00:00 GMT+0200 (Восточная Европа, стандартное время)',
	// 	text: 'Мы купили арбуз',
	// });
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
			<div className={s.zahodi}>
				<div className={s.infoBlock}>
					<p>З нами цікавіше</p>
					<h1>ЗАХОДИ БІБЛІОТЕКИ</h1>
				</div>
				<div className={s.bottomBlock}>
					<div className={s.calendarBlock}>
						<div className={s.calendar}>
							<Calendar onClickDay={(value) => {
								setValue(value);
								// alert(value)
								// { Date.parse(data.date) === Date.parse(value) ? <NewsBlock new = {data.text}/> : <NewsBlock new = 'Not today'/> }
								// { Date.parse(dades) === Date.parse(value) ? alert('true') : alert('false') }
								// alert(dades)
							}}/>
						</div>
						<div className={s.newsBlock}>
							<NewsBlock new={news}/>
						</div>
					</div>
					<div className={s.editBlock}>
						<p>Андрюх Людмила</p>
						<div className={s.buttonBlock}></div>
					</div>
					<div className={s.editBlock}>
						<p>Карпенко Тарас</p>
						<div className={s.buttonBlock}></div>
					</div>
				</div>
			</div>
			<PopularBooks data={props.data} />
		</div>
	);
};
export default MainPage;
