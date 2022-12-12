import { React, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FieldsList } from '../../../../../index';

import s from './bookEdit.module.css';
import mainlFieldsData from './mainFieldsData';
import additionalFieldsData from './additionalFieldsData';

const BookEdit = props => {
	props.setHeader(false);
	const [isHidden, setIsHidden] = useState(true);
	useEffect(() => {}, [isHidden]);

	const { currentBookId } = useParams();
	const [books, setBooks] = useState(props.data.books);

	const showAdditional = (b) => {
		if (!isHidden) {
			return(
				<FieldsList data={additionalFieldsData(b)} />
			)
		} else { }
	}

	const formMap = books.map(b =>
		b.id === currentBookId ? (
			<div className={s.contentBlock}>
				<h2 className={s.caption}>Редагування книги «{b.bookName}»</h2>
				<form className={s.form}>
					<FieldsList data={mainlFieldsData(b)} />
					<div
						className={s.additionalFieldsBtn}
						onClick={() => setIsHidden(!isHidden)}
					>
						Додаткові поля
					</div>
					{showAdditional(b)}
					<input type='submit' className={s.submitBtn} value='Зберегти зміни' />
				</form>
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