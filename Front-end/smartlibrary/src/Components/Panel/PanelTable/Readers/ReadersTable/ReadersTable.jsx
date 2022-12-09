import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
// import QRCode from 'react-qr-code';

import s from './ReadersTable.module.css';
import sp from '../../Books/BooksTable/SingleBook/popUps.module.css';
import qrCode from '../../../img/qricon.png';
import { QrIcon } from '../../../img';

const ReadersTable = props => {
	let readersElements = props.readers.map(r => {
		return (
			<div className={s.row}>
				<Link to={`/reader/${r.id}`}>{r.name}</Link>
				<div>{r.email}</div>
				<div>{r.phone}</div>
				<div>{r.needs === true ? 'так' : 'немає'}</div>
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
								<span>{r.name}</span>
								<button className={sp.closeBtn} onClick={close}>
									×
								</button>
							</div>
							<div className={sp.content}>
								<img className={s.qrImg} src={QrIcon} alt={r.name} />
								<button className={sp.btn} onClick={() => {}}>
									Роздрукувати
								</button>
							</div>
						</>
					)}
				</Popup>
				<div>{r.status}</div>
			</div>
		);
	});

	return (
		<div className={s.container}>
			<div className={s.header}>
				<p>ПІБ {`(${props.readers.length})`}</p>
				<p>Email</p>
				<p>Телефон</p>
				<p>Особливі потреби</p>
				<p>QR-код</p>
				<p>Статус</p>
			</div>
			<div className={s.main}>{readersElements}</div>
		</div>
	);
};

export default ReadersTable;
