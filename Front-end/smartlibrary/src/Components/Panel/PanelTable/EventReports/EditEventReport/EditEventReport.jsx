import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import s from './EditEventReport.module.css';

const EditEventReport = () => {
	const { id } = useParams();
	const [eventReport, setEventReport] = useState({
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
	});
	return (
		<div className={s.container}>
			<div className={s.header}>
				<h1>Звіт до заходу</h1>
				<Link to='/admin/event-reporting'>Повернутися</Link>
			</div>
			<label>
				<p>Мета, читацьке призначення</p>
				<input
					type='text'
					value={eventReport.target}
					onChange={e =>
						setEventReport({ ...eventReport, target: e.target.value })
					}
				/>
			</label>
			<label>
				<p>Місце проведення</p>
				<input
					type='text'
					value={eventReport.place}
					onChange={e =>
						setEventReport({ ...eventReport, place: e.target.value })
					}
				/>
			</label>
			<label>
				<p>Кількість присутніх</p>
				<input
					type='number'
					value={eventReport.attends}
					onChange={e =>
						setEventReport({ ...eventReport, attends: e.target.value })
					}
				/>
			</label>
			<label>
				<p>Використання технічних засобів</p>
				<input
					type='text'
					value={eventReport.techUse}
					onChange={e =>
						setEventReport({ ...eventReport, techUse: e.target.value })
					}
				/>
			</label>
			<label>
				<p>Ефективність</p>
				<input
					type='text'
					value={eventReport.efficiency}
					onChange={e =>
						setEventReport({ ...eventReport, efficiency: e.target.value })
					}
				/>
			</label>
			<label>
				<p>Форма роботи</p>
				<input
					type='text'
					value={eventReport.formOfWork}
					onChange={e =>
						setEventReport({ ...eventReport, formOfWork: e.target.value })
					}
				/>
			</label>
			<label>
				<p>Відповідальні за захід</p>
				<input
					type='text'
					value={eventReport.responsibles}
					onChange={e =>
						setEventReport({ ...eventReport, responsibles: e.target.value })
					}
				/>
			</label>
			<label>
				<p>Висновки бібліотекаря</p>
				<input
					type='text'
					value={eventReport.conclusions}
					onChange={e =>
						setEventReport({ ...eventReport, conclusions: e.target.value })
					}
				/>
			</label>
			<label>
				<p>Використана література</p>
				<input
					type='text'
					value={eventReport.usedBooks}
					onChange={e =>
						setEventReport({ ...eventReport, usedBooks: e.target.value })
					}
				/>
			</label>
			<label>
				<p>Список учасників</p>
				<input
					type='text'
					value={eventReport.participants}
					onChange={e =>
						setEventReport({ ...eventReport, participants: e.target.value })
					}
				/>
			</label>
			<button>Редагувати звіт</button>
		</div>
	);
};

export default EditEventReport;
