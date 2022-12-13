import { useState } from 'react';
import { Link } from 'react-router-dom';
import FieldsList from '../../../../FieldsList/FieldsList';
import s from './CreateNews.module.css';
import fieldsData from './fieldsData';

const CreateNews = props => {
	props.setHeader(false);
	const [news, setNews] = useState({
		name: '',
		description: '',
		date: '',
	});
	return (
		<div className={s.container}>
			<div className={s.header}>
				<h1>Додавання новини</h1>
				<Link to='/admin/news'>Повернутись</Link>
			</div>
			<FieldsList data={fieldsData(news)} />
			<button>Створити</button>
		</div>
	);
};

export default CreateNews;
