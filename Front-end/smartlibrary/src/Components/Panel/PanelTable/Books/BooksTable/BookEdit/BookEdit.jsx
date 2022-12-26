import { React, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Form } from '../../../../../index';

import s from './bookEdit.module.css';
import mainlFieldsData from '../MainFieldsData';
import additionalFieldsData from '../additionalFieldsData';
import { useEffect } from 'react';

const BookEdit = props => {
	props.setHeader(false);

	const { currentBookId } = useParams();
	const [books, setBooks] = useState(props.data.books);

	useEffect(() => {
		document.title = 'Редагувати книгу';
	}, []);

	const formMap = books.map(b =>
		b.id === currentBookId ? (
			<div className={s.contentBlock}>
				<h2 className={s.caption}>Редагування книги «{b.bookName}»</h2>
				<Form
					main={mainlFieldsData(b)}
					additional={additionalFieldsData(b)}
					btns={[{ title: 'Зберегти зміни', type: 'submit' }]}
				/>
			</div>
		) : (
			''
		)
	);

	return (
		<div className={s.container}>
			<Link to='/admin/books' className={s.btn}>
				До каталогу книжок
			</Link>
			{formMap}
		</div>
	);
};

export default BookEdit;
