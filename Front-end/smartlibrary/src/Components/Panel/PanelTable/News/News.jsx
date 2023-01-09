import { useState } from 'react';

import NewsInfo from './NewsInfo/NewsInfo';
import NewsTable from './NewsTable/NewsTable';

import s from './News.module.css';


const News = props => {
	const [news, setNews] = useState(props.news);
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
