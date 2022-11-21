import React from 'react';
import { useState } from 'react';
import  Form  from '../../../../Form/Form';
import s from './ReadersInfo.module.css';

const ReadersInfo = () => {
	const [formActive, setFormActive] = useState(false);
	return (
		<div className={s.container}>
			<Form active={formActive} setActive={setFormActive}/>
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
				<button className={s.addBtn} onClick={() => setFormActive(true)}>+ Додати читача</button>
			</div>
		</div>
	);
};

export default ReadersInfo;
