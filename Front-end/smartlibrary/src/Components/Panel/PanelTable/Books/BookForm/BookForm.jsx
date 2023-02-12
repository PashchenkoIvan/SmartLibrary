import { useState, useEffect, useContext } from 'react';
import { ServicesContext } from '../../../../../index';

import { requiredFields } from './requiredFields';
import { additionalFields } from './additionalFields';

import f from '../../../../../assets/styles/form.module.css';
import {useDispatch, useSelector} from "react-redux";
import {SetMessage} from "../../../../../redux/actions/messageActions";
import {FetchBooksSuccess} from "../../../../../redux/actions/bookActions";
import {useNavigate} from "react-router-dom";

const BookForm = props => {
	const Services = useContext(ServicesContext);
	const categories = useSelector(state => state.categories.categories)

	const [book, setBook] = useState({ ...props.book });
	const [isHidden, setIsHidden] = useState(true);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {}, [isHidden]);
	useEffect(() => {
		setBook(book);
		console.log(categories)
	}, [book]);

	return (
		<form
			className={f.form}
			onSubmit={e => {
				e.preventDefault();
				console.log(book);
				props.isEditing == 'true'
					? Promise.resolve(
							Services.BookService.EditBook(book.id, { ...book }).then(() =>
								Services.BookService.GetBooks())
								.then(res => {
									dispatch(SetMessage('Інформацію успішно змінено', 'success'))
									dispatch(FetchBooksSuccess(res.data));
									navigate('/admin/books', { replace: true })
								}))
					: Promise.resolve(
							Services.BookService.AddBook({ ...book }).then(res => {
								const book = res.data;
								console.log(book);
							})
					  ).then(res => console.log(res));
			}}
		>
			{/* Обовїязкові поля книги */}
			{requiredFields(book, setBook, categories)}

			{/* Додаткові поля книги */}
			<div className={f.additionalBtn} onClick={() => setIsHidden(!isHidden)}>
				Додаткові поля
			</div>
			{!isHidden ? additionalFields(book, setBook) : ''}

			{/* Кнопка отправки формы */}
			<div className={f.btns}>
				<input
					className={f.btn}
					type='submit'
					value={
						props.isEditing == 'true' ? 'Редагувати книгу' : 'Додати книгу'
					}
					onClick={() =>
						setTimeout(() => {
							// navigate('/admin/books');
							window.scrollTo(0, 0);
						}, 100)
					}
				/>
			</div>
		</form>
	);
};

export default BookForm;
