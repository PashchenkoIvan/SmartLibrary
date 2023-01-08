import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import NewsForm from '../NewsForm/NewsForm'

import s from './PublishNews.module.css';

const PublishNews = props => {
	props.setHeader(false);
	const { id } = useParams();
	let initState = {};

	useEffect(() => {
		document.title = 'Бібліотекар';
	}, []);

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
				<Link to='/admin/news'>Повернутись</Link>
				<h1>Публікація новини</h1>
			</div>
			<NewsForm news={news} type='publishing' />
		</div>
	);
};

export default PublishNews;
