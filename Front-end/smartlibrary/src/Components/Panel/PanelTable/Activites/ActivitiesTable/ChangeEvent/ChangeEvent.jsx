import React, { useState } from 'react';
import s from './changeEvent.module.css';

const ChangeEvent = props => {
	const [event, setEvent] = useState(props.activity);
	return (
		<div className={s.container}>
			<h1>Редагувати захід</h1>
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
				<label>
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
				<label>
					<p>Дата та час заходу</p>
					<input
						className={s.dataset}
						type='datetime-local'
						value={event.dateTime}
						onChange={e => setEvent({ ...event, dateTime: e.target.value })}
					/>
				</label>
			</div>
			<div className={s.saveAndCansel}>
				<button>Зберегти</button>
			</div>
		</div>
	);
};

export default ChangeEvent;
