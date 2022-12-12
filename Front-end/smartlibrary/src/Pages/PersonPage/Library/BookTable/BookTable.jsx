import { React, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';

import s from './BookTable.module.css';
import sp from '../../../../Components/Panel/PanelTable/Books/BooksTable/SingleBook/popUps.module.css';
import qrCode from '../../../../Components/Panel/img/qricon.png';
import { QrIcon } from '../../../../Components/Panel/img';

export const BookTableBlock = props => {
  	const { currentReaderId } = useParams();
	const [bookData, setDataBook] = useState(props.data.books);
	const [readersData, setReadersData] = useState(props.admin.tables.readers);

  	const singleBookHistoryCreater = (bookHistoryData) => {
		const currentBookBuilder = bookData.map(b =>
			b.id === bookHistoryData.id ? (
				<div className={s.singleBookHistoryContainer}>
					<Link
						to={`/${b.id}`}
						className={s.bookName}
            			onClick={() => {window.scrollTo(0, 0)}}
					>
						{b.bookName}
					</Link>
					<span className={s.dateInfo}>{bookHistoryData.dateOfIssue}</span>
					<span className={s.dateInfo}>{bookHistoryData.dateOfreturn}</span>
					<div className={s.bookStatus}>
						<div className={s.bookStatusValue} style={{ backgroundColor: bookHistoryData.color }}>
							{bookHistoryData.status}
						</div>
					</div>
				</div>
		) : (''));
		return currentBookBuilder;
	}

  const booksHistoryMap = readersData.filter(r => r.id === "sergey-zorya-1")
									   .map(r => r.booksHistory
									   .map(b => singleBookHistoryCreater(b)));

  return (
    <div className={s.container}>
        <h2>ПЕРЕЛІК КНИГ</h2>
        <div className={s.tableTopBar}>
			<div className={s.tableTitleBlock}>
				<p>Назва книги</p>
				<p>Дата видачі</p>
				<p>Дата повернення</p>
				<p>Статус</p>
			</div>
		</div>
        <div className={s.bookBlock}>
          { booksHistoryMap }
        </div>
    </div>
  )
}
export default BookTableBlock;