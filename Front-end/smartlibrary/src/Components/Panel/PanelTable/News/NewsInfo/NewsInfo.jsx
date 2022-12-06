import React from 'react';
import { Link } from 'react-router-dom';
import s from './NewsInfo.module.css';

const NewsInfo = () => {
	return (
		<div className={s.container}>
			<Link to='/admin/news/create'>+ Додати новину</Link>
		</div>
	);
};

export default NewsInfo;
