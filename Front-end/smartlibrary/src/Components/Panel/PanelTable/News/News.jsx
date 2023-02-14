import {useEffect, useState} from 'react';

import NewsInfo from './NewsInfo/NewsInfo';
import NewsTable from './NewsTable/NewsTable';

import s from './News.module.css';
import axios from "axios";


const News = props => {
	const [news, setNews] = useState([]);
	useEffect(() => {
		axios.get("https://ualib-orion.herokuapp.com/api/v1/events/")
			.then(function (responce) {
				setNews(responce.data)
			})
	},[])
	return (
		<div>
			<NewsInfo />
			<div className={s.tableContainer}>
				<NewsTable news={news} />
			</div>
		</div>
	);
};

export default News;
