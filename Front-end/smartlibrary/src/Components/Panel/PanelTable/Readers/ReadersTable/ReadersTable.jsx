import React from 'react';
import s from './ReadersTable.module.css';
import QRCode from 'react-qr-code';

const ReadersTable = () => {
	return (
		<div className={s.container}>
			<div className={s.header}>
				<p>ПІБ</p>
				<p>Email</p>
				<p>Телефон</p>
				<p>QR-код</p>
				<p>Статус</p>
			</div>
			<div className={s.main}></div>
		</div>
	);
};

export default ReadersTable;
