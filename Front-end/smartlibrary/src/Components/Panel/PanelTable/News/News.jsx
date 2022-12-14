import { useState } from 'react';

import tableData from './tableData';
import NewsInfo from './NewsInfo/NewsInfo';
import NewsTable from './NewsTable/NewsTable';
import Table from '../../../Table/Table';

const News = props => {
	const [news, setNews] = useState(props.news);
	return (
		<div>
			<NewsInfo />
			{/* <NewsTable news={news} /> */}
			<Table data={news} keys={tableData()} />
		</div>
	);
};

export default News;
