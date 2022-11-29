import React from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Book from './Book/Book';
import s from './bookList.module.css';

const BookList = props => {
  const [books, setBooks] = useState(props.books);

  const bookMapAdd = books.map(
    b =>
      <Link to={`/${b.id}`} onClick={() => {window.scrollTo(0, 0)}}>
        <Book bookAuthor={`#${b.bookAuthor}`}
              linkToBook={b.linkToBook}
              bookName={b.bookName}
              bookImg={b.bookImg}
              ganreImg={b.ganreImg}
              ganreText={b.ganreText} />
      </Link>
    )
    

  return (
    <div className={s.bookList}>
      {bookMapAdd}
    </div>
  )
}

export default BookList;