import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import s from './BooksInfo.module.css';

const BooksInfo = props => {
	const [search, setSearch] = useState('');

	useEffect(() => {
		props.setBooks(
			props.books.filter(b =>
				b.bookName.toLowerCase().indexOf(search.toLowerCase()) == -1 &&
				b.bookAuthor.toLowerCase().indexOf(search.toLowerCase()) == -1
					? false
					: true
			)
		);
	}, [search]);

	return (
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
	);
};

export default BooksInfo;
