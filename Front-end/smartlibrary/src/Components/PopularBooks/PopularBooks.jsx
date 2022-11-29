import React from 'react';
import { BookList, Caption, Btn } from '.';

import s from './popularBooks.module.css';

const PopularBooks = props => {
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

export default PopularBooks;