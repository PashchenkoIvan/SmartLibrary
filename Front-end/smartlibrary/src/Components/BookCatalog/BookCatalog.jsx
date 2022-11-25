import React from 'react';
import { BookList, Caption, Btn } from '.';

import s from './bookCatalog.module.css';

const BookCatalog = props => {
    return (
        <div className={s.bookCatalog}>
            <div className={s.bookContainer}>
                <Caption />
                <BookList books={props.data.books} />
                <Btn />
            </div>
        </div>
    )
}

export default BookCatalog;