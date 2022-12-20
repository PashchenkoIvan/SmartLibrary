import { React, useState, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import { SideBar, ContentBlock } from '.';
import s from './booksCatalog.module.css';

const BooksCatalog = props => {
	props.setHeader(false);
	const { booksCategoryId } = useParams();
	const [filteredBooks, setFilteredBooks] = useState(props.books)

	useEffect(() => {
		if (booksCategoryId !== undefined) {
			axios.get(`https://ualib-orion.herokuapp.com/api/v1/library/categories?title=${booksCategoryId}`)
			.then(res => {
				const filteredBooks = res.data;
				setFilteredBooks({books: filteredBooks, isLoading: false})
			})
		} else {
			setFilteredBooks(props.books)
		}
	}, [booksCategoryId, props.books]);

	return (
		<div className={s.container}>
			<div className={s.row}>
				<SideBar categories={props.categories} isLoading={props.categories.isLoading} />
				<ContentBlock books={filteredBooks} />
			</div>
		</div>
	);
};

export default BooksCatalog;
