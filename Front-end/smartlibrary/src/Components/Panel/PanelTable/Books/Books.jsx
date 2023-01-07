import { useContext, useEffect, useState } from 'react';

import s from './Books.module.css';
import tableData from './tableData';
import BooksInfo from './BooksInfo/BooksInfo';
import BooksTable from './BooksTable/BooksTable';
import Table from '../../../Table/Table';
import { RequestsContext } from '../../../..';

const Books = () => {
	const Requests = useContext(RequestsContext);
	useEffect(() => {
		Requests.BookRequests.GetBooks().then(res => {
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
