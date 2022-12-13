import { useState } from 'react';

import s from './Books.module.css';
import tableData from './tableData';
import BooksInfo from './BooksInfo/BooksInfo';
import BooksTable from './BooksTable/BooksTable';
import Table from '../../../Table/Table';


const Books = props => {
	const [filter, setFilter] = useState('all');
	const [books, setBooks] = useState(props.books);

	return (
		<div className={s.container}>
			<BooksInfo books={props.books} setBooks={setBooks} />
			{/* <BooksTable books={books} /> */}
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
							value='reading'
							checked={filter === 'reading'}
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
							value='notReturned'
							checked={filter === 'notReturned'}
							onChange={e => setFilter(e.target.value)}
						/>
						<span className={s.checkmark}></span>
						<p>Неповернена</p>
					</label>
				</div>
			</div>
			<Table data={books} keys={tableData()} />
		</div>
	);
};

export default Books;
