import { useEffect, useState } from 'react';
import BooksInfo from './BooksInfo/BooksInfo';
import BooksTable from './BooksTable/BooksTable';

import s from './Books.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { SetMessage } from '../../../../redux/actions/messageActions';

const Books = () => {
	const globalBooks = useSelector(state => state.books);
	const dispatch = useDispatch();

	const [books, setBooks] = useState([]);
	const startlimit = 25;
	const [booksLimiter, setBooksLimiter] = useState(startlimit);

	useEffect(() => {
		setBooks(globalBooks.books.slice(0, booksLimiter));
		if (booksLimiter !== startlimit) {
			dispatch(
				SetMessage(
					globalBooks.books.length - booksLimiter !== 0
						? `Зображено ${booksLimiter} книжок`
						: `Ви досягли кінця (${booksLimiter})`,
					globalBooks.books.length - booksLimiter !== 0 ? 'success' : 'warning'
				)
			);
		}
	}, [globalBooks.books, booksLimiter]);

	return (
		<div className={s.container}>
			<BooksInfo books={globalBooks.books} setBooks={setBooks} />
			<div className={s.tableContainer}>
				{globalBooks.loading ? <div /> : <BooksTable books={books} />}
			</div>
			<button
				className={s.btn}
				onClick={() => {
					setBooksLimiter(
						globalBooks.books.length - booksLimiter > 50
							? booksLimiter + 50
							: globalBooks.books.length
					);
				}}
			>
				Показати ще
			</button>
		</div>
	);
};

export default Books;
