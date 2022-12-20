import { useEffect, useState } from 'react';
import axios from 'axios';

import { Caption, Btn } from '.';
import BookList from '../BookList/BookList';

import s from './popularBooks.module.css';

const PopularBooks = props => {
    // const popularBooksFilter = props.books.filter(b => b.isPopularBook === true)

    return (
        <div className={s.bookCatalog}>
            <div className={s.bookContainer}>
                <Caption />
                {/* {console.log(props.books)} */}
                <BookList books={props.books} />
                <Btn />
            </div>
        </div>
    )
}

export default PopularBooks;