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
	const [activeColumn, setActiveColumn] = useState(true);

	const showAndHidden = () => {
		setActiveColumn(!activeColumn);
	};

	const typeColumn = useRef(null);

	useEffect(() => {
		let column = typeColumn.current.style;
		if (activeColumn) {
			let i = -380;
			let showColumn = setInterval(() => {
				if (column.left == '0px') clearInterval(showColumn);
				else {
					i += 20;
					column.left = i + 'px';
				}
			});
		} else {
			let i = 0;
			let hideColumn = setInterval(() => {
				if (column.left == '-380px') clearInterval(hideColumn);
				else {
					i -= 20;
					column.left = i + 'px';
				}
			});
		}
	}, [activeColumn]);

	return (
		<>
			<div className={s.container}>
				<div className={s.inner}>{btnMapAdd}</div>
			</div>
			<div
				className={s.columnContainer}
				ref={typeColumn}
				onClick={showAndHidden}
			>
				<div className={s.scrollItems}>{btnMapAdd}</div>
				<div className={s.showButton}>
					<div className={s.vertBar} />
				</div>
			</div>
		</>
	);
};

export default PanelType;
