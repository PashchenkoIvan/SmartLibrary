import { React, useContext, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form } from '../../../../../index';

import s from './bookEdit.module.css';
import mainFieldsData from '../mainFieldsData';
import additionalFieldsData from '../additionalFieldsData';
import { useEffect } from 'react';
import { RequestsContext } from '../../../../../..';

const BookEdit = ({ books, setHeader }) => {
	setHeader(false);

	const { currentBookId } = useParams();
	const Requests = useContext(RequestsContext);
	const Navigate = useNavigate();

	useEffect(() => {
		document.title = 'Редагувати книгу';
		console.log(formMap);
	}, []);

	const formMap = books.books.map(b =>
		b.id == currentBookId ? (
			<div className={s.contentBlock}>
				<h2 className={s.caption}>Редагування книги «{b.title}»</h2>
				<Form
					main={mainFieldsData(b)}
					additional={additionalFieldsData(b)}
					btns={[
						{
							title: 'Зберегти зміни',
							type: 'submit',
							oncLick: () => {
								Requests.BookRequests.ChangeBook(b.id, b).then(res => {
									console.log(res);
									Navigate('/admin/readers');
								});
							},
						},
					]}
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
