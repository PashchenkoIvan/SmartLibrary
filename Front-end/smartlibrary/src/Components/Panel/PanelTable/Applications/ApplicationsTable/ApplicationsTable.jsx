import React, { useState } from 'react';
import s from './ApplicationsTable.module.css';
import sp from '../../Books/BooksTable/SingleBook/popUps.module.css';
import qrCode from '../../../img/qricon.png';
import Popup from 'reactjs-popup';
import { QrIcon } from '../../../img';

const ApplicationsTable = ({ applications }) => {
	let applicationsElements = applications.map(a => {
		return (
			<div className={s.row}>
				<div>{a.name}</div>
				<div>{a.book}</div>
				<div>{a.date}</div>
				<div>{a.number}</div>
				<Popup
					trigger={
						<div>
							<img src={qrCode} alt='' />
						</div>
					}
					modal
				>
					{close => (
						<>
							<div className={sp.header}>
								<span>{a.book}</span>
								<button className={sp.closeBtn} onClick={close}>
									×
								</button>
							</div>
							<div className={sp.content}>
								<img className={s.qrImg} src={QrIcon} alt={a.bookName} />
								<button className={sp.btn} onClick={() => {}}>
									Роздрукувати
								</button>
							</div>
						</>
					)}
				</Popup>
			</div>
		);
	});
	return (
		<div className={s.container}>
			<div className={s.header}>
				<p>ПІБ ({applications.length})</p>
				<p>Книга</p>
				<p>Дата</p>
				<p>Інвентарний номер</p>
				<p>QR-код</p>
			</div>
			<div className={s.main}>{applicationsElements}</div>
		</div>
	);
};

export default ApplicationsTable;
