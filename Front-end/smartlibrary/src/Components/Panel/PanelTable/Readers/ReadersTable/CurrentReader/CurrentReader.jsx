import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';

import s from './currentReader.module.css';
import sp from '../../../Books/BooksTable/SingleBook/popUps.module.css';
import f from '../../../../../../assets/styles/form.module.css';

import qrCode from '../../../../img/qricon.png';
import { QrIcon } from '../../../../img';

const CurrentReader = props => {
	props.setHeader(false);
	const { currentReaderId } = useParams();
	const [search, setSearch] = useState('');
	const [bookData, setDataBook] = useState(props.data.books);
	const [readersData, setReadersData] = useState(props.admin.tables.readers);
	const [reader, setReader] = useState({});

	useEffect(() => {
		document.title = 'Читач';
	});

	useEffect(() => {
		props.admin.tables.readers.map(r => {
			if(r.id === currentReaderId) {
				setReader(r)
			}
		})
	}, [currentReaderId, props.admin.tables.readers]);

	useEffect(() => {
		setDataBook(
			props.data.books.filter(b =>
				b.bookName.toLowerCase().indexOf(search.toLowerCase()) == -1
					? false
					: true
			)
		);
	}, [props.data.books, search]);

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

	const booksHistoryMap = reader.booksHistory?.map(b => singleBookHistoryCreater(b));

	return (
		<>
			<div className={s.container}>
				<Link to='/admin/readers' className={s.btn}>
					До списку читачів
				</Link>
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
										<form
											className={f.form}
											onSubmit={e => {
												e.preventDefault();
												console.log(reader);
												// Promise.resolve(
												//     Auth.AuthService.makeLogin({
												//         email: state.email,
												//         password: state.password,
												//     })
												// ).then(res => (res !== undefined ? (Auth.status = res ? 'librarian' : 'user') : Auth.status = 'anonym'));
											}}
										>
											<ul className={`${f.fieldsList} + ${sp.fields}`}>
											<li className={f.fieldBlock}>
												<label>ПІБ</label>
												<input
													type='text'
													value={reader.full_name}
													name='full_name'
													onChange={e =>
														setReader({
															...reader,
															full_name: e.target.value,
														})
													}
												/>
											</li>
											<li className={f.fieldBlock}>
												<label>Email</label>
												<input
													type='email'
													value={reader.email}
													name='email'
													onChange={e =>
														setReader({
															...reader,
															email: e.target.value,
														})
													}
												/>
											</li>
											<li className={f.fieldBlock}>
												<label>Місце роботи</label>
												<input
													type='text'
													value={reader.work}
													name='work'
													onChange={e =>
														setReader({
															...reader,
															work: e.target.value,
														})
													}
												/>
											</li>
											{/* <li className={f.fieldBlock}>
												<label>Дата народження</label>
												<input
													type='daye'
													value={reader.birthday}
													placeholder={reader.birthday}
													name='birthday'
													onChange={e =>
														setReader({
															...reader,
															birthday: e.target.value,
														})
													}
												/>
											</li> */}
											<li className={f.fieldBlock}>
												<label>Домашня адреса</label>
												<input
													type='text'
													value={reader.home_address}
													name='home_address'
													onChange={e =>
														setReader({
															...reader,
															home_address: e.target.value,
														})
													}
												/>
											</li>
											<li className={f.fieldBlock}>
												<label>Телефон (за згодою)</label>
												<input
													type='text'
													value={reader.phone_number}
													name='phone_number'
													onChange={e =>
														setReader({
															...reader,
															phone_number: e.target.value,
														})
													}
												/>
											</li>
											{/* <li className={f.fieldBlock}>
												<label>Паспорт (за згодою)</label>
												<input
													type='text'
													value={reader.passport}
													name='passport'
													onChange={e =>
														setReader({
															...reader,
															passport: e.target.value,
														})
													}
												/>
											</li> */}
											</ul>
											<div className={f.btns}>
												<input
													className={f.btn}
													type='submit'
													value='Зберегти зміни'
													onClick={
														e => {
															// e.preventDefault();
															console.log('Button Clicked!');
															// Admin.AdminRequests.AddReader(reader);
														}
													}
												/>
											</div>
										</form>
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
											reader.status === 'Немає боргів' ? '#7ed321' : '#ff0000'
										}`,
									}}
								>
									{reader.status}
								</div>
								<h3 className={s.readerName}>{reader.full_name}</h3>
							</div>
							<ul className={s.extendedReaderInfo}>
								<li className={s.singleReaderParameter}>
									<div className={s.value}>Дата народження</div>
									<div className={s.key}>{reader.birthday}</div>
								</li>
								<li className={s.singleReaderParameter}>
									<div className={s.value}>Домашня адреса</div>
									<div className={s.key}>{reader.home_address}</div>
								</li>
								<li className={s.singleReaderParameter}>
									<div className={s.value}>Місце роботи</div>
									<div className={s.key}>{reader.work}</div>
								</li>
								<li className={s.singleReaderParameter}>
									<div className={s.value}>Телефон</div>
									<div className={s.key}>{reader.phone_number}</div>
								</li>
								<li className={s.singleReaderParameter}>
									<div className={s.value}>Паспортні данні</div>
									<div className={s.key}>
										{reader.passport ? reader.passport : 'Не дав(-ла) згоду'}
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className={s.booksHistoryContainer}>
				<div className={s.booksHistory}>
					<div className={s.booksTopBar}>
						<div className={s.search}>
							<input
								type='text'
								placeholder='Проскануйте QR-код або введіть назву/автора книги'
								value={search}
								onChange={e => setSearch(e.target.value)}
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