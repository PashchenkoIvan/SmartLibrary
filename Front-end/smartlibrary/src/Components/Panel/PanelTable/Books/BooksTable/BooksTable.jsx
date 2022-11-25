import React from 'react';
import s from './BooksTable.module.css';
import qrCode from '../../../img/qricon.png';
import { NavLink } from 'react-router-dom';

const BooksTable = props => {
	let booksElements = props.books.map(b => {
		let path = `/Books/Edit/${b.id}`;
		return (
			<div className={s.row}>
				<p>{b.name}</p>
				<p>{b.author}</p>
				<p>{b.number}</p>
				<p>{b.status}</p>
				<div>
					<img src={qrCode} alt='' />
				</div>
				<NavLink to={path}>Редагувати</NavLink>
			</div>
		);
	});

	return (
		<div className={s.container}>
			<div className={s.filter}>
				<p>Загальна кількість книг</p>
				<div className={s.filters}>
					<div className={s.filtersAll}>
						<input type='checkbox' id='all' />
						<label htmlFor='all'>Всі</label>
					</div>
					<div className={s.filtersAll}>
						<input type='checkbox' id='all' />
						<label htmlFor='all'>Читається</label>
					</div>
					<div className={s.filtersAll}>
						<input type='checkbox' id='all' />
						<label htmlFor='all'>Неповернена</label>
					</div>
					<div className={s.filtersReading}></div>
					<div className={s.filtersNotReturned}></div>
				</div>
			</div>
			<div className={s.tableHeader}></div>
			<div className={s.tableMain}>{booksElements}</div>
		</div>
	);
};

export default BooksTable;
