import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Btn, Row } from '.';

import s from './selectedBook.module.css';
import { useSelector } from 'react-redux';

const SelectedBook = props => {
	props.setHeader(false);
	const books = useSelector(state => state.books.books);
	const [book, setBook] = useState({
		book: [''],
		isLoading: true,
	});
	const { bookName } = useParams();

	useEffect(() => {
		document.title = 'Каталог книг';
	}, []);

	useEffect(() => {
		console.log(bookName);
		axios.get(`https://ualib-orion.herokuapp.com/api/v1/library/books?title=${bookName}`)
			.then(res => {
				const book = res.data;
				setBook({ book: book, isLoading: false });
			});
	}, [bookName]);

	return (
		<div className={s.container}>
			<Link
				to='/catalog'
				className={s.link}
				onClick={() => {
					window.scrollTo(0, 0);
				}}
			>
				<Btn />
			</Link>
			<Row book={book} books={books} status={props.status} />
		</div>
	);
};

export default SelectedBook;
