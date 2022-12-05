import { React, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';

import { QrIcon } from '../../../../img'
import s from './singleBook.module.css';
import sp from './popUps.module.css';
import './popUps.css';

const bibliographicDescriptionPopUp = (b) => {
  return(
	<>
	  <div className={sp.header}>
		<span>Бібліографічний опис</span>
		<button className={sp.closeBtn} data-popup="tooltip">×</button>
	  </div>
	  <div className={sp.content}>
		<span>{`«${b.bookName}.» — ${b.bookAuthor}, ${b.lang}, ${b.dateOfPublication}. - c. ${b.pageAmount}`}</span>
	    <button className={sp.btn} onClick={() => {}}>Роздрукувати</button>
	  </div>
	</>
  )
}

const SingleBook = props => {
  const { currentBookId } = useParams();
  const [books, setBooks] = useState(props.admin.tables.books);
  const [bookData, setDataBook] = useState(props.data.books[0]);

  const singleBookMap = books.map(b =>
	b.id == currentBookId ?
	  <div className={s.contentBlock}>
	    <div className={s.sideBar}>
		  <div className={s.qr}>
			<img className={s.qrImg} src={QrIcon} alt={b.name} />
		    <Link to='' className={`${s.sideBarLink} + ' ' + ${s.bg_ffbb68}`}>Роздрукувати QR-код</Link>
		  </div>
		  <div className={s.links}>
		    <Link to={`/single-book/edit/${b.id}`} className={`${s.sideBarLink} + ' ' + ${s.bg_a9e2e9}`}>Редагувати книгу</Link>
		    <Link to={`/${b.id}`} className={`${s.sideBarLink} + ' ' + ${s.bg_ffbb68}`}>Переглянути на сайті</Link>
			<Popup trigger={<button className={`${s.sideBarLink} + ' ' + ${s.bg_ffbb68}`}>Бібліографічний опис</button>} position="center center">
	    	  {bibliographicDescriptionPopUp(bookData)}
	  		</Popup>
		  </div>
		</div>
		<div className={s.bookProfile}>
		  <img src={bookData.bookImg} alt={bookData.bookName} className={s.bookImg} />
		  <div className={s.bookInfo}>
			<div className={s.bookInfoTop}>
			  <div className={s.bookStatus}>{bookData.bookStatus}</div>
			  <h3 className={s.bookName}>{bookData.bookName}</h3>
			</div>
			<ul className={s.extendedBookInfo}>
			  <li className={s.singleBookParameter}>
				<div className={s.value}>Автор</div>
				<div className={s.key}>{bookData.bookAuthor}</div>
			  </li>
			  <li className={s.singleBookParameter}>
				<div className={s.value}>Категорія</div>
				<div className={s.key}>{bookData.ganreText}</div>
			  </li>
			  <li className={s.singleBookParameter}>
				<div className={s.value}>Мова</div>
				<div className={s.key}>{bookData.lang}</div>
			  </li>
			  <li className={s.singleBookParameter}>
				<div className={s.value}>Рік</div>
				<div className={s.key}>{bookData.dateOfPublication}</div>
			  </li>
			  <li className={s.singleBookParameter}>
				<div className={s.value}>Сторінок</div>
				<div className={s.key}>{bookData.pageAmount}</div>
			  </li>
			  <li className={s.singleBookParameter}>
				<div className={s.value}>Тип</div>
				<div className={s.key}>{bookData.bookType}</div>
			  </li>
			  <li className={s.singleBookParameter}>
				<div className={s.value}>ISBN</div>
				<div className={s.key}>{bookData.ISBN}</div>
			  </li>
			</ul>
		  </div>
		</div>
	  </div>
	  : ''
  );

  return (
	<div className={s.container}>
	  <Link to='/admin/books' className={s.btn}>До каталогу книжок</Link>
	  {singleBookMap}
	</div>
  );
};

export default SingleBook;
