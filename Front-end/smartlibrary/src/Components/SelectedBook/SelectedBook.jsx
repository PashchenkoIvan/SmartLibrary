import { React, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Btn, Row } from '.';

import BookCatalog from '../PopularBooks/PopularBooks';

import s from './selectedBook.module.css';

const SelectedBook = props => {
	props.setHeader(false);
	const { bookId } = useParams();
	const [books, setBooks] = useState(props.data.books);

	return (
		<div className={s.container}>
			<Link
				to='/catalog'
				element={BookCatalog}
				onClick={() => {
					window.scrollTo(0, 0);
				}}
			>
				<Btn />
			</Link>
			<Row
				currentBook={books.reduce(
					(res, obj) => (obj.id == bookId ? obj : res),
					{}
				)}
				books={books}
			/>
		</div>
	);
};

export default SelectedBook;
