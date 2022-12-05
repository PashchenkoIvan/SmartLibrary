import React, { useState } from 'react';
import s from './InvertorySearch.module.css';

const InvertorySearch = () => {
	const [search, setSearch] = useState('');
	return (
		<div className={s.container}>
			<input
				type='text'
				placeholder='Проскануйте QR-код або введіть назву/автора книги'
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
		</div>
	);
};

export default InvertorySearch;
