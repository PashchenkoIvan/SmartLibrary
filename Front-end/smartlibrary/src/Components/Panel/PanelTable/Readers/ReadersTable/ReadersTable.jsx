import React, { useState } from 'react';
import s from './ReadersTable.module.css';
// import QRCode from 'react-qr-code';
import qrcode from '../../../img/qricon.png';

const ReadersTable = props => {
	const [readers, setReaders] = useState(props.readers);

	let readersElements = readers.map(r => {
		return (
			<div className={s.row}>
				<div>{r.name}</div>
				<div>{r.email}</div>
				<div>{r.phone}</div>
				<div>
					<img src={qrcode} alt='qrcode' />
				</div>
				<div>{r.status}</div>
			</div>
		);
	});

	return (
		<div className={s.container}>
			<div className={s.header}>
				<p>ПІБ</p>
				<p>Email</p>
				<p>Телефон</p>
				<p>QR-код</p>
				<p>Статус</p>
			</div>
			<div className={s.main}>{readersElements}</div>
		</div>
	);
};

export default ReadersTable;
