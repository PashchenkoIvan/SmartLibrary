import React from 'react';
import { Caption, Btn } from '.';
import BookList from '../BookList/BookList';

import s from './popularBooks.module.css';

const PopularBooks = props => {
    const popularBooksFilter = props.data.books.filter(b => b.isPopularBook === true)

    return (
        <div className={s.bookCatalog}>
            <div className={s.bookContainer}>
                <Caption />
                <BookList books={popularBooksFilter} />
                <Btn />
            </div>
        </div>
    )
}

export default PopularBooks;