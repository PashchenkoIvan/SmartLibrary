import { useState } from 'react';

import tableData from './tableData';
import NewsInfo from './NewsInfo/NewsInfo';
import Table from '../../../Table/Table';

import s from './News.module.css';

const News = props => {
	const [news, setNews] = useState(props.news);
	return (
		<div>
			<NewsInfo />
			<div className={s.tableContainer}>
				<Table data={news} keys={tableData()} />
			</div>
		</div>
	);
};

export default News;
