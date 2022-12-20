import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Form from '../../../../Form/Form';
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
				<Link to='/admin/news'>Повернутись</Link>
				<h1>Редагування новини</h1>
			</div>
			<Form
				main={fieldsData(news)}
				btns={[{ title: 'Оновити', type: 'submit' }]}
			/>
		</div>
	);
};

export default EditNews;
