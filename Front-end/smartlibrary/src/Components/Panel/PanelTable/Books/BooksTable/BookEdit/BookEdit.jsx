import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import BookForm from '../../BookForm/BookForm';

import s from './bookEdit.module.css';


const BookEdit = ({ books, setHeader }) => {
	setHeader(false);

	const { currentBookTitle } = useParams();

	useEffect(() => {
		document.title = 'Редагувати книгу';
	}, []);

	return (
		<div className={s.container}>
			<Link to='/admin/books' className={s.btn}>
				До каталогу книжок
			</Link>
			<BookForm 
				book={books.books.filter(b => {
					if(b.title == currentBookTitle) {
						return b;
					}
				})[0]}
				isEditing='true'
			/>
		</div>
	);
};

export default BookEdit;
