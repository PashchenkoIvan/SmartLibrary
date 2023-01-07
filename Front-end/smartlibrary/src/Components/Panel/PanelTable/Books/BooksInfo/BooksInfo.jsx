import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './BooksInfo.module.css';

const BooksInfo = props => {
	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState('all');

	useEffect(() => {
		props.setBooks(
			props.books.filter(b =>
				b.title.toLowerCase().indexOf(search.toLowerCase()) == -1 &&
				b.author.toLowerCase().indexOf(search.toLowerCase()) == -1
					? false
					: true && filter == 'all'
					? true
					: filter == b.status
			)
		);
	}, [search, filter]);

	return (
		<>
			<div className={s.container}>
				<div className={s.search}>
					<input
						type='text'
						placeholder='Проскануйте QR-код або введіть назву/автора книги'
						value={search}
						onChange={e => setSearch(e.target.value)}
					/>
					<button>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
							/>
						</svg>
					</button>
				</div>
				<div className={s.buttons}>
					<NavLink
						className={s.addBook}
						to='/book-single/create'
						onClick={() => window.scrollTo(0, 0)}
					>
						+ Додати книгу
					</NavLink>
					<NavLink className={s.categories} to='/books/categories'>
						Категорії
					</NavLink>
				</div>
			</div>
			<div className={s.filter}>
				<p>Загальна кількість книг {`(${props.books.length})`}</p>
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
							value='R'
							checked={filter === 'R'}
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
							value='N'
							checked={filter === 'N'}
							onChange={e => setFilter(e.target.value)}
						/>
						<span className={s.checkmark}></span>
						<p>Неповернена</p>
					</label>
				</div>
			</div>
		</>
	);
};

export default BooksInfo;
