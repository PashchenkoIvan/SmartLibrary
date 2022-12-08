import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './NewsTable.module.css';

const NewsTable = props => {
	const [news, setNews] = useState(props.news);

	let newsElements = news.map(n => {
		return (
			<div className={s.row}>
				<div>{n.name}</div>
				<div>{n.description}</div>
				<div>{n.date}</div>
				<div>
					<Link to={'/admin/news/edit/' + n.id}>Редагувати</Link>
				</div>
				<div>
					<Link to={'/admin/news/publish/' + n.id}>Публіковати</Link>
				</div>
			</div>
		);
	});

	return (
		<div className={s.container}>
			<div className={s.header}>
				<p>Новина ({news.length})</p>
				<p>Опис</p>
				<p>Дата</p>
			</div>
			<div className={s.main}>{newsElements}</div>
		</div>
	);
};

export default NewsTable;
