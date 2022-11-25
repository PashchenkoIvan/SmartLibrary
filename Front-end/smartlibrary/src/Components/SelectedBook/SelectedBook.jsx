import { React, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Btn, Row } from '.';

import BookCatalog from '../BookCatalog/BookCatalog';

import s from './selectedBook.module.css';

const SelectedBook = props => {
    const { bookId } = useParams();
    const [books, setBooks] = useState(props.data.books);

    return (
        <div className={s.container}>
            <Link to='/catalog' element={BookCatalog}>
                <Btn />
            </Link>
            <Row currentBook={books[bookId]} books={books} />
        </div>
    )
}

export default SelectedBook;