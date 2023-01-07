import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import BookForm from '../BookForm/BookForm';

import s from './bookEdit.module.css';


const BookEdit = props => {
	props.setHeader(false);

	const { currentBookId } = useParams();

	useEffect(() => {
		document.title = 'Редагувати книгу';
	}, []);

	return (
		<div className={s.container}>
			<Link to='/admin/books' className={s.btn}>
				До каталогу книжок
			</Link>
			<BookForm 
				book={props.books.books.filter(b => {
					if(b.id == currentBookId) {
						return b;
					}
				})[0]}
				isEditing='true'
			/>
		</div>
	);
};

export default BookEdit;
