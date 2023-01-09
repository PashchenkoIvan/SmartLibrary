import { useContext, useEffect, useState } from 'react';

import { ServicesContext } from '../../../..';
import BooksInfo from './BooksInfo/BooksInfo';
import BooksTable from './BooksTable/BooksTable';

import s from './Books.module.css';


const Books = () => {
	const Services = useContext(ServicesContext);
	useEffect(() => {
		Services.BookService.GetBooks().then(res => {
			setBooks(res.data);
			setAllBooks(res.data);
			console.log(res.data);
		});
	}, []);

	const [books, setBooks] = useState([]);
	const [allBooks, setAllBooks] = useState([]);

	return (
		<div className={s.container}>
			<BooksInfo books={allBooks} setBooks={setBooks} />
			<div className={s.tableContainer}>
				<BooksTable books={books} />
			</div>
		</div>
	);
};

export default Books;
