import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../../../../Form/Form';
import s from './CreateNews.module.css';
import fieldsData from './fieldsData';
import axios from 'axios';
const url = 'https:localhost:8000/api/v1/events/';

const CreateNews = props => {
	useEffect(() => {
		document.title = 'Бібліотекар';
	}, []);
	const func = () => {
		axios.post(url, JSON.stringify(news)).then(responce => 		console.log(responce))
	}
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
				btns={[{ title: 'Створити', type: 'submit' , onclick: func()}]}
			/>
		</div>
	);
};

export default CreateNews;
