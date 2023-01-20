import { React, useState, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import { SideBar, ContentBlock } from '.';
import s from './booksCatalog.module.css';
import { useSelector } from 'react-redux';

const BooksCatalog = props => {
	props.setHeader(false);
	const books = useSelector(state => state.books);
	const categories = useSelector(state => state.categories);
	const { booksCategoryId } = useParams();
	const [filteredBooks, setFilteredBooks] = useState(books);
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
					setFilteredBooks({ books: filteredBooks });
				});
		} else {
			setFilteredBooks(books);
		}
	}, [booksCategoryId, books]);

	useEffect(() => {
		setFilteredBooks({
			books: books.books.filter(
				b =>
					b?.title?.toLowerCase().includes(search.toLowerCase()) ||
					b?.author?.toLowerCase().includes(search.toLowerCase())
			),
		});
		console.log(filteredBooks);
	}, [search]);

	return (
		<div className={s.container}>
			<div className={s.row}>
				<SideBar categories={categories} isLoading={categories.loading} />
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
