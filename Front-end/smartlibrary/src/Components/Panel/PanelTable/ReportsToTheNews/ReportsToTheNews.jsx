import React from 'react';
import s from './ReportsToTheNews.module.css';

export let Array = [
	{threme: 'Мета', place: 'st.Darnitskaya 19', date: '03.12.2022',},
]

const Block = (props) => {
	return (
		<div className={s.infoBlock}>
			<p>{props.name}</p>
			<p>{props.home}</p>
			<p>{props.birthday}</p>
			<button>Редагувати</button>
			<button>Видалити</button>
		</div>
	);
};

const ReportsToTheNews = () => {
	let ArrayAdd = Array.map(e => <Block name={e.threme} home={e.place} birthday={e.date}/>);
	return(
		<div className={s.container}>
			<button>+ Додати</button>
			<div className={s.table}>
				<div className={s.titleBlock}>
					<p>Мета</p>
					<p>Місце</p>
					<p>Дата</p>
				</div>
				{ArrayAdd}
			</div>
		</div>
	);
};

export default ReportsToTheNews;
