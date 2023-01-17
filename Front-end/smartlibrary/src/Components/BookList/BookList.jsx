import { React, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Book from './Book/Book';
import s from './bookList.module.css';

const BookList = props => {
	const globalBooks = useSelector(state => state.books);
	const [books, setBooks] = useState(globalBooks);
	const [booksAmount, setBooksAmount] = useState(12);

	const bookCreating = (b, counter, isLoading) => {
		if (counter < booksAmount) {
			return (
				<Link
					to={isLoading ? `` : `/selected-book/${b.title}`}
					onClick={() => {
						window.scrollTo(0, 0);
					}}
				>
					<Book
						isLoading={isLoading}
						author={`#${b.author}`}
						title={b.title}
						cover_img_path={b.cover_img_path}
						category={b.category}
					/>
				</Link>
			);
		} else {
		}
	};

	let booksCounter = 0;
	const bookMapAdd = globalBooks.books
		.map(el => {
			booksCounter = 0;
			return el;
		})
		.map(b => bookCreating(b, booksCounter++, books.isLoading));

	useEffect(() => {
		setBooksAmount(12);
		setBooks(props.books);
	}, [props.books]);

	return (
		<>
			<div className={s.bookList}>{bookMapAdd}</div>
			<div className={s.btnContainer}>
				{window.location.href.match(/catalog/) && booksCounter > 12 ? (
					<button className={s.btn} onClick={() => setBooksAmount(c => c + 12)}>
						Показати ще
					</button>
				) : (
					''
				)}
			</div>
		</>
	);
};

export default BookList;
