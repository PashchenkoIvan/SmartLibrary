import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../../../../Form/Form';
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
				<Link to='/admin/news'>Повернутись</Link>
				<h1>Додавання новини</h1>
			</div>
			<Form
				main={fieldsData(news)}
				btns={[{ title: 'Створити', type: 'submit' }]}
			/>
		</div>
	);
};

export default CreateNews;
