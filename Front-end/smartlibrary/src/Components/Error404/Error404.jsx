import { useEffect } from 'react';

import s from './error404.module.css';

const Error404 = props => {
	useEffect(() => {
		document.title = 'Error 404';
	}, []);

	props.setHeader(false);

	return (
		<div className={s.container}>
			<h1 className={s.error}>404</h1>
		</div>
	);
};

export default Error404;
