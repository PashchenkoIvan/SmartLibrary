import s from './PanelType.module.css';
import { NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

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

	const [rendersFirst, setRendersFirst] = useState(true);

	let btnMapAdd = btnMap.map(b => (
		<NavLink
			to={'/admin/' + b.path}
			className={navData =>
				(navData.isActive ? s.isActive : s.notActive) + ' ' + s.item
			}
		>
			{b.title}
		</NavLink>
	));
	const [activeColumn, setActiveColumn] = useState(false);

	const showAndHide = () => {
		setActiveColumn(!activeColumn);
	};

	const typeColumn = useRef(null);

	useEffect(() => {
		let columnClass = typeColumn.current.classList;
		if (rendersFirst) {
			columnClass.add(s.hidden);
			setRendersFirst(false);
		} else {
			if (activeColumn) {
				columnClass.add(s.show);
				columnClass.remove(s.hidden);
				columnClass.add(s.showed);
				setTimeout(() => columnClass.remove(s.show), 200);
			} else {
				columnClass.add(s.hide);
				columnClass.remove(s.showed);
				columnClass.add(s.hidden);
				setTimeout(() => columnClass.remove(s.hide), 200);
			}
		}
	}, [activeColumn]);

	return (
		<>
			<div className={s.container}>
				<div className={s.inner}>{btnMapAdd}</div>
			</div>
			<div className={s.columnContainer} ref={typeColumn} onClick={showAndHide}>
				<div className={s.scrollItems}>{btnMapAdd}</div>
				<div className={s.showButton}>
					<div className={s.vertBar} />
				</div>
			</div>
		</>
	);
};

export default PanelType;
