import React from 'react';
import NewsInfo from './NewsInfo/NewsInfo';
import NewsTable from './NewsTable/NewsTable';

const News = props => {
	return (
		<div>
			<NewsInfo />
			<NewsTable news={props.news} />
		</div>
	);
};

export default News;
