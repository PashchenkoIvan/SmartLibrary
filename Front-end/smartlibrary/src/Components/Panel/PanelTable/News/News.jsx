import { useState } from 'react';
import NewsInfo from './NewsInfo/NewsInfo';
import NewsTable from './NewsTable/NewsTable';

const News = props => {
	const [news, setNews] = useState(props.news);
	return (
		<div>
			<NewsInfo />
			<NewsTable news={news} />
		</div>
	);
};

export default News;
