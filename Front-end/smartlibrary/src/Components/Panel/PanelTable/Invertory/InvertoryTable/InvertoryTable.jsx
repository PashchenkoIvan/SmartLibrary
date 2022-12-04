import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './InvertoryTable.module.css';

const InvertoryTable = props => {
	const [invertory, setInvertory] = useState(props.invertory);

	let invertoryElements = invertory.map(i => {
		let path = `/Books/BookSingle/${i.id}`;
		return (
			<div className={s.row}>
				<Link to={path}>{i.name}</Link>
				<div>{i.author}</div>
				<div>{i.num}</div>
				<div>
					<p>{i.status ? 'Вже сканована' : 'Не сканована'}</p>
				</div>
				<button>Видалити</button>
			</div>
		);
	});

	return (
		<div className={s.container}>
			<div className={s.header}>
				<p>Назва сканованої книги</p>
				<p>Автор</p>
				<p>Інвертарний номер</p>
				<p>Статус</p>
				<p>Видалити</p>
			</div>
			<div className={s.main}>{invertoryElements}</div>
		</div>
	);
};

export default InvertoryTable;
