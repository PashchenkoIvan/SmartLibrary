import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

import s from './BooksTable.module.css';
import sp from './SingleBook/popUps.module.css';
import qrCode from '../../../img/qricon.png';
import { QrIcon } from '../../../img';

const BooksTable = props => {
	const [filter, setFilter] = useState('all');
	const [books, setBooks] = useState(props.books);
	const [booksAmount, setBooksAmount] = useState(5);

	const bookElementCreating = (b, counter) => {
		if (counter < booksAmount) {
		  	return (
				<div className={s.row}>
					<Link to={`/book-single/${b.id}`} onClick={() => window.scrollTo(0, 0)}>{b.bookName}</Link>
					<div>{b.bookAuthor}</div>
					<div>{b.ISBN}</div>
					<div>{b.isPopularBook ? 'У наявності' : 'Відсутня'}</div>
					<Popup
							trigger={
								<div>
									<img src={qrCode} alt='' />
								</div>
							}
							modal
						>
							{close => (
								<>
									<div className={sp.header}>
									<span>{b.bookName}</span>
									<button className={sp.closeBtn} onClick={close}>×</button>
									</div>
									<div className={sp.content}>
										<img className={s.qrImg} src={QrIcon} alt={b.bookName} />
										<button className={sp.btn} onClick={() => {}}>Роздрукувати</button>
									</div>
								</>
							)}
						</Popup>
					<Link to={`/book-single/edit/${b.id}`} onClick={() => window.scrollTo(0, 0)}>Редагувати</Link>
				</div>
		  	)
		} else { }
	}

	let booksCounter = 0;
	let booksElements = books.map(el => { booksCounter = 0; return el; }).map((b) => (bookElementCreating(b, booksCounter++)))

	useEffect(
		() => {
		  	setBooks(props.books);
		}, [props.books],
	);

	return (
		<div className={s.container}>
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
			<div className={s.header}>
				<p>Назва книги {`(${booksAmount > books.length ? books.length : booksAmount})`}</p>
				<p>Автор</p>
				<p>Інвертарний номер</p>
				<p>Статус</p>
				<p>QR-код</p>
			</div>
			<div className={s.main}>{booksElements}</div>
			<button className={s.btn} onClick={() => setBooksAmount((c) => c + 4)}>
                Показати ще
            </button>
		</div>
	);
};

export default BooksTable;
