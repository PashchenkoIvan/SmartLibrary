import s from './PanelType.module.css';
import { NavLink } from 'react-router-dom';

const PanelType = () => {
	let btnMap = [
		{ title: 'Список читачів', path: 'readers' },
		{ title: 'Список книг', path: 'books' },
		{ title: 'Заявки', path: 'applications' },
		{ title: 'Заходи', path: 'activities' },
		{ title: 'Звіти з заходів', path: 'event-reporting' },
		{ title: 'Річна звітність', path: 'annual-reporting' },
		{ title: 'Інвентарізація', path: 'invertory' },
		{ title: 'Бібліотекарі', path: 'librarians' },
		{ title: 'Філіі', path: 'affiliates' },
		{ title: 'Новини', path: 'news' },
		{ title: 'Звіти до новини', path: 'reports-to-the-news' },
		{ title: 'Відвідувачі', path: 'visitors' },
	];

	let btnMapAdd = btnMap.map(b => (
		<NavLink
			to={'/admin/' + b.path}
			className={navData => (navData.isActive ? s.isActive : s.notActive)}
		>
			{b.title}
		</NavLink>
	));

	return (
		<div className={s.container}>
			<div className={s.inner}>{btnMapAdd}</div>
		</div>
	);
};

export default PanelType;
