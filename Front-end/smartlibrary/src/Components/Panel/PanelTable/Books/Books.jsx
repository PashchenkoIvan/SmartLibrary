import { useContext, useEffect, useState } from 'react';

import s from './Books.module.css';
import tableData from './tableData';
import BooksInfo from './BooksInfo/BooksInfo';
import Table from '../../../Table/Table';
import { RequestsContext, ServicesContext } from '../../../..';

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
				<Table data={books} keys={tableData()} />
			</div>
		</div>
	);
};

export default Books;
