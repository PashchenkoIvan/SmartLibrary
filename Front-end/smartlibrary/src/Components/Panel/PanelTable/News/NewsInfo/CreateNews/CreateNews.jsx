import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import NewsForm from '../../NewsForm/NewsForm'

import s from './CreateNews.module.css';

const CreateNews = props => {
	props.setHeader(false);
	useEffect(() => {
		document.title = 'Бібліотекар';
	}, []);

	const [news, setNews] = useState({
		name: '',
		description: '',
		date: '',
	});
	return (
		<div className={s.container}>
			<div className={s.header}>
				<Link to='/admin/news' onClick={() => window.scrollTo(0, 0)}>Повернутись</Link>
				<h1>Додавання новини</h1>
			</div>
			<NewsForm news={news} type='creating' />
		</div>
	);
};

export default CreateNews;
