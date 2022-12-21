import s from './PersonPage.module.css';
import Cabinet from './Cabinet/Cabinet';
import { Library } from './Library/Library';
import Alerts from './Alerts/Alerts';
import { useEffect } from 'react';

const PersonPage = props => {
	useEffect(() => {
		document.title = 'Користувач';
	}, []);
	props.setHeader(false);
	return (
		<div className={s.container}>
			<Cabinet />
			<Library admin={props.admin} data={props.data} />
			<Alerts />
		</div>
	);
};
export default PersonPage;
