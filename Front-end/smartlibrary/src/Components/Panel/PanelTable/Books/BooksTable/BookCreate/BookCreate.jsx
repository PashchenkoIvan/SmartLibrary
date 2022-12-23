import { Link } from 'react-router-dom';
import { Form } from '../../../../../index';

import s from './bookCreate.module.css';
import mainlFieldsData from '../mainFieldsData';
import additionalFieldsData from '../additionalFieldsData';

const BookCreate = props => {
	props.setHeader(false)

	return (
		<div className={s.container}>
			<Link to='/admin/books' className={s.btn}>
				До каталогу книжок
			</Link>
			<div className={s.contentBlock}>
				<h2 className={s.caption}>Додавання нової книги</h2>
				<div className={s.topBar}>
					<button className={s.addBook}>Додати по URL</button>
					<button className={s.addBook}>Пошук в Google</button>
					<button className={s.addBook}>Пошук по штриху</button>
					<input
						className={s.inputCodeField}
						type='text'
						placeholder='Введіть штрих код книги'
					/>
				</div>
				<Form main={mainlFieldsData({})} additional={additionalFieldsData({})} btns={[{title: "Додати книгу", type: "submit", post: "add-book"}]} />
			</div>
		</div>
	);
};

export default BookCreate;
