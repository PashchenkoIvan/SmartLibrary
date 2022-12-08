import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import s from './EditNews.module.css';

const EditNews = props => {
	const { id } = useParams();

	let initState = {};

	props.news.forEach(n => {
		if (id == n.id) {
			initState = {
				name: n.name,
				description: n.description,
				date: n.date,
			};
		}
	});

	const [news, setNews] = useState(initState);
	return (
		<div className={s.container}>
			<div className={s.header}>
				<h1>Редагування новини</h1>
				<Link to='/admin/news'>Повернутись</Link>
			</div>
			<label>
				<p>Новина</p>
				<input
					type='text'
					value={news.name}
					onChange={e => setNews({ ...news, name: e.target.value })}
				/>
			</label>
			<label>
				<p>Опис</p>
				<input
					type='text'
					value={news.description}
					onChange={e => setNews({ ...news, description: e.target.value })}
				/>
			</label>
			<label>
				<p>Формат події</p>
				<input
					className={s.dateInput}
					type='date'
					value={news.date}
					onChange={e => setNews({ ...news, date: e.target.value })}
				/>
			</label>
			<button>Оновити</button>
		</div>
	);
};

export default EditNews;
