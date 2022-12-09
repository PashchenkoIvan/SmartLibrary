import React, { useEffect, useState } from 'react';
import s from './InvertorySearch.module.css';

const InvertorySearch = props => {
	const [search, setSearch] = useState('');

	useEffect(() => {
		props.setInvertory(
			props.invertory.filter(b =>
				b.bookName.indexOf(search) == -1 ? false : true
			)
		);
	}, [search]);
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
