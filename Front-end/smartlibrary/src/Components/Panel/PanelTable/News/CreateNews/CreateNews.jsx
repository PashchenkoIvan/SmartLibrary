import { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './CreateNews.module.css';

const CreateNews = () => {
	const [news, setNews] = useState({
		name: '',
		description: '',
		date: '',
	});
	return (
		<div className={s.container}>
			<div className={s.header}>
				<h1>Підготовка звіту</h1>
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
			<button>Створити</button>
		</div>
	);
};

export default CreateNews;
