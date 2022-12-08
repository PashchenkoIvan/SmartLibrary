import { useState } from 'react';
import s from './Books.module.css';
import BooksInfo from './BooksInfo/BooksInfo';
import BooksTable from './BooksTable/BooksTable';

const Books = props => {
	const [books, setBooks] = useState(props.books);

	return (
		<div className={s.container}>
			<BooksInfo books={props.books} setBooks={setBooks} />
			<BooksTable books={books} />
		</div>
	);
};

export default Books;
