import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import FieldsList from '../../../../FieldsList/FieldsList';
import fieldsData from '../CreateNews/fieldsData';
import s from './EditNews.module.css';

const EditNews = props => {
	props.setHeader(false);
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
			<FieldsList data={fieldsData(news)} />
			<button>Оновити</button>
		</div>
	);
};

export default EditNews;
