import { React, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';

import { QrIcon } from '../../../../img';
import s from './singleBook.module.css';
import sp from './popUps.module.css';
import './popUps.css';


const SingleBook = props => {
	const { currentBookId } = useParams();
	const [bookData, setDataBook] = useState(props.data.books);

	const singleBookMap = bookData.map(b =>
		b.id == currentBookId ? (
			<div className={s.contentBlock}>
				<div className={s.sideBar}>
					<div className={s.qr}>
						<img className={s.qrImg} src={QrIcon} alt={b.bookName} />
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
									<button className={sp.closeBtn} onClick={close}>×</button>
									</div>
									<div className={sp.content}>
										<img className={s.qrImg} src={QrIcon} alt={b.bookName} />
										<button className={sp.btn} onClick={() => {}}>Роздрукувати</button>
									</div>
								</>
							)}
						</Popup>
					</div>
					<div className={s.links}>
						<Link
							to={`/book-single/edit/${b.id}`}
							className={`${s.sideBarLink} + ' ' + ${s.bg_a9e2e9}`}
						>
							Редагувати книгу
						</Link>
						<Link
							to={`/${b.id}`}
							className={`${s.sideBarLink} + ' ' + ${s.bg_ffbb68}`}
							onClick={() => {
								window.scrollTo(0, 0);
							}}
						>
							Переглянути на сайті
						</Link>
						<Popup
							trigger={
								<button className={`${s.sideBarLink} + ' ' + ${s.bg_ffbb68}`}>
									Бібліографічний опис
								</button>
							}
							modal
						>
							{close => (
								<>
									<div className={sp.header}>
										<span>Бібліографічний опис</span>
										<button className={sp.closeBtn} onClick={close}>
											×
										</button>
									</div>
									<div className={sp.content}>
										<span>{`«${b.bookName}.» — ${b.bookAuthor}, ${b.lang}, ${b.dateOfPublication}. - c. ${b.pageAmount}`}</span>
										<button className={sp.btn} onClick={() => {}}>
											Роздрукувати
										</button>
									</div>
								</>
							)}
						</Popup>
					</div>
				</div>
				<div className={s.bookProfile}>
					<div
						className={s.bookImg}
						style={{ backgroundImage: 'url(' + b.bookImg + ')' }}
					></div>
					<div className={s.bookInfo}>
						<div className={s.bookInfoTop}>
							<div className={s.bookStatus}>{b.bookStatus}</div>
							<h3 className={s.bookName}>{b.bookName}</h3>
						</div>
						<ul className={s.extendedBookInfo}>
							<li className={s.singleBookParameter}>
								<div className={s.value}>Автор</div>
								<div className={s.key}>{b.bookAuthor}</div>
							</li>
							<li className={s.singleBookParameter}>
								<div className={s.value}>Категорія</div>
								<div className={s.key}>{b.ganreText}</div>
							</li>
							<li className={s.singleBookParameter}>
								<div className={s.value}>Мова</div>
								<div className={s.key}>{b.lang}</div>
							</li>
							<li className={s.singleBookParameter}>
								<div className={s.value}>Рік</div>
								<div className={s.key}>{b.dateOfPublication}</div>
							</li>
							<li className={s.singleBookParameter}>
								<div className={s.value}>Сторінок</div>
								<div className={s.key}>{b.pageAmount}</div>
							</li>
							<li className={s.singleBookParameter}>
								<div className={s.value}>Тип</div>
								<div className={s.key}>{b.bookType}</div>
							</li>
							<li className={s.singleBookParameter}>
								<div className={s.value}>ISBN</div>
								<div className={s.key}>{b.ISBN}</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		) : (
			''
		)
	);

	return (
		<div className={s.container}>
			<Link to='/admin/books' className={s.btn}>
				До каталогу книжок
			</Link>
			{singleBookMap}
		</div>
	);
};

export default SingleBook;
