import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';

import { QrIcon } from '../../../../img';
import s from './singleBook.module.css';
import sp from './popUps.module.css';
import './popUps.css';
import { useEffect } from 'react';

const SingleBook = props => {
	props.setHeader(false);
	const { currentBookId } = useParams();
	const [bookData, setDataBook] = useState(props.books.books);

	useEffect(() => {
		document.title = 'Каталог книг';
	}, []);

	const singleBookMap = bookData.map(b =>
		b.id == currentBookId ? (
			<div className={s.contentBlock}>
				<div className={s.sideBar}>
					<div className={s.qr}>
						<img className={s.qrImg} src={QrIcon} alt={b.title} />
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
										<img className={s.qrImg} src={QrIcon} alt={b.title} />
										<button className={sp.btn} onClick={() => {}}>
											Роздрукувати
										</button>
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
							to={`/selected-book/${b.title}`}
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
										<span>{`«${b.title}.» — ${b.author}, ${b.language}, ${b.publication_year}. - c. ${b.number_of_pages}`}</span>
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
						style={{ backgroundImage: 'url(' + b.cover_img_path + ')' }}
					></div>
					<div className={s.bookInfo}>
						<div className={s.bookInfoTop}>
							<div className={s.bookStatus}>{b.status}</div>
							<h3 className={s.bookName}>{b.title}</h3>
						</div>
						<ul className={s.extendedBookInfo}>
							<li className={s.singleBookParameter}>
								<div className={s.value}>Автор</div>
								<div className={s.key}>{b.author}</div>
							</li>
							<li className={s.singleBookParameter}>
								<div className={s.value}>Категорія</div>
								<div className={s.key}>{b.category}</div>
							</li>
							<li className={s.singleBookParameter}>
								<div className={s.value}>Мова</div>
								<div className={s.key}>{b.language}</div>
							</li>
							<li className={s.singleBookParameter}>
								<div className={s.value}>Рік</div>
								<div className={s.key}>{b.publication_year}</div>
							</li>
							<li className={s.singleBookParameter}>
								<div className={s.value}>Сторінок</div>
								<div className={s.key}>{b.number_of_pages}</div>
							</li>
							<li className={s.singleBookParameter}>
								<div className={s.value}>Тип</div>
								<div className={s.key}>{b.book_type == 'P' ? 'Паперова' : 'Електрона'}</div>
							</li>
							<li className={s.singleBookParameter}>
								<div className={s.value}>ISBN</div>
								<div className={s.key}>{b.isbn}</div>
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
