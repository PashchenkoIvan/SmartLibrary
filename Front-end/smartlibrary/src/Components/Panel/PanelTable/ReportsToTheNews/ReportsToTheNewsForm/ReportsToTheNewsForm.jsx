import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import s from './reportsToTheNewsForm.module.css';
import f from '../../../../../assets/styles/form.module.css';

const ReportsToTheNewsForm = props => {
	const { id } = useParams();
	const [newsReport, setNewsReport] = useState(
		{
			id: id,
			target: '',
			place: '',
			attends: '',
			techUse: '',
			efficiency: '',
			formOfWork: '',
			responsibles: '',
			conclusions: '',
			usedBooks: '',
			participants: '',
		}
	);

	useEffect(() => {
		setNewsReport(newsReport);
	}, [newsReport]);

	useEffect(() => {
		document.title = 'Бібліотекар';
	}, []);
	
	return (
		<div className={s.container}>
			<div className={s.block}>
				<Link to='/admin/reports-to-the-news'>Повернутись</Link>
				<h1>ОНОВЛЕНЯ ЗВІТУ ДО НОВИНИ</h1>
				<form
					className={f.form}
					onSubmit={e => {
						e.preventDefault();
						console.log(newsReport);
						// Promise.resolve(
						//     Requests.BookRequests.EditBook(book.id, { ...book }).then(res => {
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
								value={newsReport.target}
								name='target'
								onChange={e =>
									setNewsReport({
										...newsReport,
										target: e.target.value,
									})
								}
							/>
						</li>
						<li className={f.fieldBlock}>
							<label>Кількість присутніх</label>
							<input
								type='number'
								value={newsReport.attends}
								name='attends'
								onChange={e =>
									setNewsReport({
										...newsReport,
										attends: e.target.value,
									})
								}
							/>
						</li>
						<li className={f.fieldBlock}>
							<label>Використання технічних засобів</label>
							<input
								type='text'
								value={newsReport.techUse}
								name='techUse'
								onChange={e =>
									setNewsReport({
										...newsReport,
										techUse: e.target.value,
									})
								}
							/>
						</li>
						<li className={f.fieldBlock}>
							<label>Ефективність</label>
							<input
								type='text'
								value={newsReport.efficiency}
								name='tecefficiencyhUse'
								onChange={e =>
									setNewsReport({
										...newsReport,
										efficiency: e.target.value,
									})
								}
							/>
						</li>
						<li className={f.fieldBlock}>
							<label>Форма роботи</label>
							<input
								type='text'
								value={newsReport.formOfWork}
								name='formOfWork'
								onChange={e =>
									setNewsReport({
										...newsReport,
										formOfWork: e.target.value,
									})
								}
							/>
						</li>
						<li className={f.fieldBlock}>
							<label>Відповідальні за захід</label>
							<input
								type='text'
								value={newsReport.responsibles}
								name='responsibles'
								onChange={e =>
									setNewsReport({
										...newsReport,
										responsibles: e.target.value,
									})
								}
							/>
						</li>
						<li className={f.fieldBlock}>
							<label>Висновки бібліотекаря</label>
							<input
								type='text'
								value={newsReport.conclusions}
								name='conclusions'
								onChange={e =>
									setNewsReport({
										...newsReport,
										conclusions: e.target.value,
									})
								}
							/>
						</li>
						<li className={f.fieldBlock}>
							<label>Використаня література</label>
							<input
								type='text'
								value={newsReport.usedBooks}
								name='usedBooks'
								onChange={e =>
									setNewsReport({
										...newsReport,
										usedBooks: e.target.value,
									})
								}
							/>
						</li>
						<li className={f.fieldBlock}>
							<label>Список учасників</label>
							<input
								type='text'
								value={newsReport.participants}
								name='participants'
								onChange={e =>
									setNewsReport({
										...newsReport,
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
							value='Редагувати звіт до новин'
							onClick={() =>
								setTimeout(() => {
									window.scrollTo(0, 0);
								}, 100)
							}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default ReportsToTheNewsForm;
