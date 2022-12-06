import React from 'react';
import { useState } from 'react';
import Popup from 'reactjs-popup';
import Form from '../AddReaderForm/AddReaderForm';
import s from './ReadersInfo.module.css';
import './addReader.css';

const ReadersInfo = () => {
	return (
		<div className={s.container}>
			<div className={s.search}>
				<div className={s.input}>
					<input type='text' placeholder='Введіть ПІБ або проскануйте QR-код' />
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
				<Popup trigger={<button className={s.addBtn}>+ Додати читача</button>}>
					<Form />
				</Popup>
			</div>
		</div>
	);
};

export default ReadersInfo;
