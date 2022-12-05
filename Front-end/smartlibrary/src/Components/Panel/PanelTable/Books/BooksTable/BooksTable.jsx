import React from 'react';
import s from './BooksTable.module.css';
import qrCode from '../../../img/qricon.png';
import { NavLink } from 'react-router-dom';

const BooksTable = props => {
	let booksElements = props.books.map(b => {
		let path = `/admin/books/edit/${b.id}`;
		return (
			<div className={s.row}>
				<div>
					<NavLink to={`/book-single/${b.id}`}>
						{b.name}
					</NavLink>
				</div>
				<div>{b.author}</div>
				<div>{b.number}</div>
				<div>{b.status}</div>
				<div>
					<img src={qrCode} alt='' />
				</div>
				<NavLink to={path} className={s.btnEdit}>Редагувати</NavLink>
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
			<div className={s.header}>
				<p>Назва книги</p>
				<p>Автор</p>
				<p>Інвертарний номер</p>
				<p>Статус</p>
				<p>QR-код</p>
			</div>
			<div className={s.main}>{booksElements}</div>
		</div>
	);
};

export default BooksTable;
