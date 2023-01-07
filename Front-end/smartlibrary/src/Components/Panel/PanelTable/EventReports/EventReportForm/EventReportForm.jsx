import { useState, useEffect } from 'react';

import f from '../../../../../assets/styles/form.module.css';

const BookForm = props => {
	const [eventReport, setEventReport] = useState({ ...props.eventReport });
	useEffect(() => {
		setEventReport(eventReport);
	}, [eventReport]);

	return (
		<form
			className={f.form}
			onSubmit={e => {
				e.preventDefault();
				console.log(eventReport);
				// props.isEditing == 'true'
				// ? Promise.resolve(
				//     Requests.BookRequests.EditBook(book.id, { ...book }).then(res => {
				//         const book = res.data;
				//         console.log(book);
				//     })
				// ).then(res => (console.log(res)))
				// : Promise.resolve(
				//     Requests.BookRequests.AddBook({ ...book }).then(res => {
				//         const book = res.data;
				//         console.log(book);
				//     })
				// ).then(res => (console.log(res)))
			}}
		>
			{/* Поля звіту */}
			<ul className={f.fieldsList}>
				<li className={f.fieldBlock}>
					<label>Мета, читацьке призначення</label>
					<input
						type='text'
						value={eventReport.target}
						name='target'
						onChange={e =>
							setEventReport({
								...eventReport,
								target: e.target.value,
							})
						}
					/>
				</li>
				<li className={f.fieldBlock}>
					<label>Кількість присутніх</label>
					<input
						type='number'
						value={eventReport.attends}
						name='attends'
						onChange={e =>
							setEventReport({
								...eventReport,
								attends: e.target.value,
							})
						}
					/>
				</li>
				<li className={f.fieldBlock}>
					<label>Використання технічних засобів</label>
					<input
						type='text'
						value={eventReport.techUse}
						name='techUse'
						onChange={e =>
							setEventReport({
								...eventReport,
								techUse: e.target.value,
							})
						}
					/>
				</li>
				<li className={f.fieldBlock}>
					<label>Ефективність</label>
					<input
						type='text'
						value={eventReport.efficiency}
						name='tecefficiencyhUse'
						onChange={e =>
							setEventReport({
								...eventReport,
								efficiency: e.target.value,
							})
						}
					/>
				</li>
				<li className={f.fieldBlock}>
					<label>Форма роботи</label>
					<input
						type='text'
						value={eventReport.formOfWork}
						name='formOfWork'
						onChange={e =>
							setEventReport({
								...eventReport,
								formOfWork: e.target.value,
							})
						}
					/>
				</li>
				<li className={f.fieldBlock}>
					<label>Відповідальні за захід</label>
					<input
						type='text'
						value={eventReport.responsibles}
						name='responsibles'
						onChange={e =>
							setEventReport({
								...eventReport,
								responsibles: e.target.value,
							})
						}
					/>
				</li>
				<li className={f.fieldBlock}>
					<label>Висновки бібліотекаря</label>
					<input
						type='text'
						value={eventReport.conclusions}
						name='conclusions'
						onChange={e =>
							setEventReport({
								...eventReport,
								conclusions: e.target.value,
							})
						}
					/>
				</li>
				<li className={f.fieldBlock}>
					<label>Використаня література</label>
					<input
						type='text'
						value={eventReport.usedBooks}
						name='usedBooks'
						onChange={e =>
							setEventReport({
								...eventReport,
								usedBooks: e.target.value,
							})
						}
					/>
				</li>
				<li className={f.fieldBlock}>
					<label>Список учасників</label>
					<input
						type='text'
						value={eventReport.participants}
						name='participants'
						onChange={e =>
							setEventReport({
								...eventReport,
								participants: e.target.value,
							})
						}
					/>
				</li>
			</ul>

			{/* Кнопка отправки формы */}
			<div className={f.btns}>
				<input
					className={f.btn}
					type='submit'
					value={
						props.isEditing == 'true' ? 'Редагувати звіт' : 'Створити звіт'
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
