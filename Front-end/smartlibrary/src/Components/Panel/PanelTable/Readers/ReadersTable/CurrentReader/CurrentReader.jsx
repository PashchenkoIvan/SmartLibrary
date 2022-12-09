import { React, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';

import s from './currentReader.module.css';
import sp from '../../../Books/BooksTable/SingleBook/popUps.module.css';
import qrCode from '../../../../img/qricon.png';
import { QrIcon } from '../../../../img';

const CurrentReader = props => {
	props.setHeader(false);
	const { currentReaderId } = useParams();
	const [bookData, setDataBook] = useState(props.data.books);
	const [readersData, setReadersData] = useState(props.admin.tables.readers);

	const singleFieldCreator = (label, type, value, name) => {
		const typeChecker = () => {
			if (type === 'text' || type === 'password' || type === 'checkbox') {
				return (
					<>
						<label>{label}</label>
						<input type={type} value={value} name={name} />
					</>
				);
			} else if (type === 'textarea') {
				return (
					<>
						<label>{label}</label>
						<textarea name={name}>{value}</textarea>
					</>
				);
			} else {
			}
		};
		return <li className={s.singleFieldBlock}>{typeChecker()}</li>;
	};

	const showFieldsList = r => {
		return (
			<ul className={s.fieldsList}>
				{singleFieldCreator('ПІБ', 'text', r.name, r.id)}
				{singleFieldCreator('Email', 'text', r.email, `${r.name}_email`)}
				{singleFieldCreator(
					'Місце роботи',
					'text',
					r.workAddress,
					`${r.id}_workAddress`
				)}
				{singleFieldCreator(
					'Дата народження',
					'text',
					r.birthday,
					`${r.id}_birthday`
				)}
				{singleFieldCreator(
					'Домашня адреса',
					'text',
					r.homeAddress,
					`${r.id}_homeAddress`
				)}
				{singleFieldCreator('Телефон', 'text', r.phone, `${r.id}_phone`)}
				{singleFieldCreator(
					'Паспортні дані (за згодою)',
					'text',
					`${r.passportInfo ? r.passportInfo : 'Не дав(-ла) згоду'}`,
					`${r.id}_passportInfo`
				)}
				{singleFieldCreator(
					'Пароль',
					'password',
					r.password,
					`${r.id}_password`
				)}
				{singleFieldCreator('Дитина', 'checkbox', r.isChild, `${r.id}_isChild`)}
				{singleFieldCreator(
					'Додаткова інформація',
					'textarea',
					r.additionalInfo,
					`${r.id}_additionalInfo`
				)}
			</ul>
		);
	};

	const singleReaderMap = readersData.map(r =>
		r.id === currentReaderId ? (
			<div className={s.contentBlock}>
				<div className={s.qr}>
					<div className={s.qrHeader}>Особистий QR-код</div>
					<div className={s.qrMain}>
						<img className={s.qrImg} src={QrIcon} alt={bookData.bookName} />
					</div>
				</div>
				<div className={s.links}>
					<Popup
						trigger={
							<button className={`${s.sideBarLink} + ' ' + ${s.bg_a9e2e9}`}>
								Редагувати профіль
							</button>
						}
						modal
					>
						{close => (
							<>
								<div className={sp.header}>
									<span>Редагувати профіль</span>
									<button className={sp.closeBtn} onClick={close}>
										×
									</button>
								</div>
								<div className={sp.content}>
									<div className={sp.fields}>{showFieldsList(r)}</div>
									<button className={sp.btn} onClick={() => {}}>
										Зберегти зміни
									</button>
								</div>
							</>
						)}
					</Popup>
					<Popup
						trigger={
							<button className={`${s.sideBarLink} + ' ' + ${s.bg_ffbb68}`}>
								Роздрукувати QR-код
							</button>
						}
						modal
					>
						{close => (
							<>
								<div className={sp.header}>
									<span>Роздрукувати QR-код</span>
									<button className={sp.closeBtn} onClick={close}>
										×
									</button>
								</div>
								<div className={sp.content}>
									<img
										className={s.qrImg}
										src={QrIcon}
										alt={bookData.bookName}
									/>
									<button className={sp.btn} onClick={() => {}}>
										Роздрукувати
									</button>
								</div>
							</>
						)}
					</Popup>
					<button className={`${s.sideBarLink} + ' ' + ${s.bg_ffbb68}`}>
						Надіслати пароль
					</button>
					<button className={`${s.sideBarLink} + ' ' + ${s.bg_ffbb68}`}>
						Видалити користувача
					</button>
				</div>
				<div className={s.readerProfile}>
					<div className={s.readerInfo}>
						<div className={s.readerInfoTop}>
							<div
								className={s.readerStatus}
								style={{
									backgroundColor: `${
										r.status === 'Немає боргів' ? '#7ed321' : '#ff0000'
									}`,
								}}
							>
								{r.status}
							</div>
							<h3 className={s.readerName}>{r.name}</h3>
						</div>
						<ul className={s.extendedReaderInfo}>
							<li className={s.singleReaderParameter}>
								<div className={s.value}>Дата народження</div>
								<div className={s.key}>{r.birthday}</div>
							</li>
							<li className={s.singleReaderParameter}>
								<div className={s.value}>Домашня адреса</div>
								<div className={s.key}>{r.homeAddress}</div>
							</li>
							<li className={s.singleReaderParameter}>
								<div className={s.value}>Місце роботи</div>
								<div className={s.key}>{r.workAddress}</div>
							</li>
							<li className={s.singleReaderParameter}>
								<div className={s.value}>Телефон</div>
								<div className={s.key}>{r.phone}</div>
							</li>
							<li className={s.singleReaderParameter}>
								<div className={s.value}>Паспортні данні</div>
								<div className={s.key}>
									{r.passportInfo ? r.passportInfo : 'Не дав(-ла) згоду'}
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		) : (
			''
		)
	);

	const singleBookHistoryCreater = bookHistoryData => {
		const currentBookBuilder = bookData.map(b =>
			b.id === bookHistoryData.id ? (
				<div className={s.singleBookHistoryContainer}>
					<Link to={`/book-single/${b.id}`} className={s.bookName}>
						{b.bookName}
					</Link>
					<div className={s.bookQr}>
						<Popup trigger={<img src={qrCode} alt='' />} modal>
							{close => (
								<>
									<div className={sp.header}>
										<span>{b.bookName}</span>
										<button className={sp.closeBtn} onClick={close}>
											×
										</button>
									</div>
									<div className={sp.content}>
										<img className={s.qrImg} src={QrIcon} alt={b.name} />
										<button className={sp.btn} onClick={() => {}}>
											Роздрукувати
										</button>
									</div>
								</>
							)}
						</Popup>
					</div>
					<span className={s.dateInfo}>{bookHistoryData.dateOfIssue}</span>
					<span className={s.dateInfo}>{bookHistoryData.dateOfreturn}</span>
					<div className={s.bookStatus}>
						<div
							className={s.bookStatusValue}
							style={{ backgroundColor: bookHistoryData.color }}
						>
							{bookHistoryData.status}
						</div>
					</div>
					<div className={s.btnContainer}>
						{bookHistoryData.status === 'Заброньована' ? (
							<button className={s.giveBookBtn}>Видати</button>
						) : (
							''
						)}
					</div>
				</div>
			) : (
				''
			)
		);
		return currentBookBuilder;
	};

	const booksHistoryMap = readersData
		.filter(r => r.id === currentReaderId)
		.map(r => r.booksHistory.map(b => singleBookHistoryCreater(b)));

	return (
		<>
			<div className={s.container}>
				<Link to='/admin/readers' className={s.btn}>
					До списку читачів
				</Link>
				{singleReaderMap}
			</div>
			<div className={s.booksHistoryContainer}>
				<div className={s.booksHistory}>
					<div className={s.booksTopBar}>
						<div className={s.search}>
							<input
								type='text'
								placeholder='Проскануйте QR-код або введіть назву/автора книги'
							/>
							<button>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
									/>
								</svg>
							</button>
						</div>
						<button className={s.giveBook}>Видати книгу</button>
					</div>
					<div className={s.booksTable}>
						<div className={s.keysBar}>
							<span>Назва книги</span>
							<span>QR-код</span>
							<span>Дата видачі</span>
							<span>Дата повернення</span>
							<span>Статус</span>
						</div>
						<div className={s.valuesTable}>{booksHistoryMap}</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CurrentReader;
