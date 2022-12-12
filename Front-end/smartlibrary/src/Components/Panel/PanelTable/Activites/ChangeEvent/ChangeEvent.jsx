import React, { useState } from 'react';

import s from './changeEvent.module.css';
import sp from '../../Books/BooksTable/SingleBook/popUps.module.css';

const ChangeEvent = props => {
	const [event, setEvent] = useState(props.activity);
	return (
		<div className={sp.container}>
			<div className={sp.header}>
				<span>Редагувати захід</span>
				<button className={sp.closeBtn} onClick={props.close}>
					×
				</button>
			</div>
			<div className={sp.content}>
				<div className={s.fieldBlock}>
					<label>Назва заходу</label>
					<input
						type='text'
						value={event.name}
						onChange={e => setEvent({ ...event, name: e.target.value })}
					/>
				</div>
				<div className={s.fieldBlock}>
					<label>Короткий опис заходу</label>
					<textarea
						className={s.smallDescription}
						type='text'
						value={event.smallDescription}
						onChange={e =>
							setEvent({ ...event, smallDescription: e.target.value })
						}
					/>
				</div>
				<div className={s.fieldBlock}>
					<label>Повний опис заходу</label>
					<textarea
						className={s.bigDescription}
						type='text'
						value={event.bigDescription}
						onChange={e => setEvent({ ...event, bigDescription: e.target.value })}
					/>
				</div>
				<div className={s.categoryAndTime}>
					<div className={s.fieldBlock}>
						<label>Категорія</label>
						<select
							value={event.category}
							onChange={e => setEvent({ ...event, category: e.target.value })}
						>
							<option value='Новини ОТГ'>Новини ОТГ</option>
							<option value='Новини бібліотеки'>Новини бібліотеки</option>
							<option value='Заходи'>Заходи</option>
						</select>
					</div>
					<div className={s.fieldBlock}>
						<label>Дата та час заходу</label>
						<input
							className={s.dataset}
							type='datetime-local'
							value={event.dateTime}
							onChange={e =>
								setEvent({
									...event,
									dateTime: e.target.value.replace('T', ' '),
								})
							}
						/>
					</div>
				</div>
				<button className={s.saveBtn}>Зберегти</button>
			</div>
		</div>
	);
};

export default ChangeEvent;
