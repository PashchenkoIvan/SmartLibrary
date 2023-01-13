import { React, useState, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import { SideBar, ContentBlock } from '.';
import s from './booksCatalog.module.css';

const BooksCatalog = props => {
	props.setHeader(false);
	const { booksCategoryId } = useParams();
	const [filteredBooks, setFilteredBooks] = useState(props.books);
	const [search, setSearch] = useState('');

	useEffect(() => {
		document.title = 'Каталог книг';
	}, []);

	useEffect(() => {
		if (booksCategoryId !== undefined) {
			axios
				.get(
					`https://ualib-orion.herokuapp.com/api/v1/library/categories?title=${booksCategoryId}`
				)
				.then(res => {
					const filteredBooks = res.data;
					setFilteredBooks({ books: filteredBooks, isLoading: false });
				});
		} else {
			setFilteredBooks(props.books);
		}
	}, [booksCategoryId, props.books]);

	useEffect(() => {
		setFilteredBooks({
			...filteredBooks,
			books: props.books.books.filter(
				b =>
					b?.title?.toLowerCase().includes(search.toLowerCase()) ||
					b?.author?.toLowerCase().includes(search.toLowerCase())
			),
		});
	}, [search]);

	return (
		<div className={s.container}>
			<div className={s.row}>
				<SideBar
					categories={props.categories}
					isLoading={props.categories.isLoading}
				/>
				<ContentBlock
					books={filteredBooks}
					search={search}
					setSearch={setSearch}
				/>
			</div>
		</div>
	);
};

export default BooksCatalog;
