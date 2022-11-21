import React from 'react';
import { BookList, Caption, Btn } from './';

import s from './bookCatalog.module.css';

const BookCatalog = () => {
    return (
        <div className={s.bookCatalog}>
            <div className={s.bookContainer}>
                <Caption />
                <BookList />
                <Btn btnText="Переглянути всі книжки" />
            </div>
        </div>
    )
}

export default BookCatalog;