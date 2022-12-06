import React, { useState } from 'react';
import s from './CreateEvent.module.css';

const CreateEvent = () => {
	const [event, setEvent] = useState({
		name: '',
		smallDescription: '',
		bigDescription: '',
		category: '',
		dateTime: '',
	});
	return (
		<div className={s.container}>
			<h1>Створення нового заходу</h1>
			<label>
				<p>Назва заходу</p>
				<input
					type='text'
					value={event.name}
					onChange={e => setEvent({ ...event, name: e.target.value })}
				/>
			</label>
			<label>
				<p>Короткий опис заходу</p>
				<textarea
					className={s.smallDescription}
					type='text'
					value={event.smallDescription}
					onChange={e =>
						setEvent({ ...event, smallDescription: e.target.value })
					}
				/>
			</label>
			<label>
				<p>Повний опис заходу</p>
				<textarea
					className={s.bigDescription}
					type='text'
					value={event.bigDescription}
					onChange={e => setEvent({ ...event, bigDescription: e.target.value })}
				/>
			</label>
			<div className={s.categoryAndTime}>
				<label className={s.category}>
					<p>Категорія</p>
					<select
						value={event.category}
						onChange={e => setEvent({ ...event, category: e.target.value })}
					>
						<option value='Новини ОТГ'>Новини ОТГ</option>
						<option value='Новини бібліотеки'>Новини бібліотеки</option>
						<option value='Заходи'>Заходи</option>
					</select>
				</label>
				<label className={s.dataset}>
					<p>Дата та час заходу</p>
					<input
						type='datetime-local'
						value={event.dateTime}
						onChange={e =>
							setEvent({
								...event,
								dateTime: e.target.value.replace('T', ' '),
							})
						}
					/>
				</label>
			</div>
			<div className={s.saveAndCansel}>
				<button>Створити новий захід</button>
			</div>
		</div>
	);
};

export default CreateEvent;
