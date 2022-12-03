import React, { useState } from 'react';
import s from './BooksTable.module.css';
import qrCode from '../../../img/qricon.png';
import { Link } from 'react-router-dom';

const BooksTable = props => {
	const [filter, setFilter] = useState('');

	let booksElements = props.books.map(b => {
		let pathMain = `/${b.id}`;
		let pathEdit = `/Books/Edit/${b.id}`;
		return (
			<div className={s.row}>
				<Link to={pathMain}>{b.bookName}</Link>
				<div>{b.bookAuthor}</div>
				<div>{b.ISBN}</div>
				<div>{b.isPopularBook ? 'У наявності' : 'Відсутня'}</div>
				<div>
					<img src={qrCode} alt='' />
				</div>
				<Link to={pathEdit}>Редагувати</Link>
			</div>
		);
	});

	return (
		<div className={s.container}>
			<div className={s.filter}>
				<p>Загальна кількість книг</p>
				<div className={s.filters}>
					<label className={s.filterItem} htmlFor='all'>
						<input
							type='radio'
							id='all'
							name='filter'
							value='all'
							checked={filter === 'all'}
							onChange={e => setFilter(e.target.value)}
						/>
						<span className={s.checkmark}></span>
						<p>Всі</p>
					</label>

					<label className={s.filterItem} htmlFor='reading'>
						<input
							type='radio'
							id='reading'
							name='filter'
							value='reading'
							checked={filter === 'reading'}
							onChange={e => setFilter(e.target.value)}
						/>
						<span className={s.checkmark}></span>
						<p>Читається</p>
					</label>

					<label className={s.filterItem} htmlFor='notReturned'>
						<input
							type='radio'
							id='notReturned'
							name='filter'
							value='notReturned'
							checked={filter === 'notReturned'}
							onChange={e => setFilter(e.target.value)}
						/>
						<span className={s.checkmark}></span>
						<p>Неповернена</p>
					</label>
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
