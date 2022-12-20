import React from 'react';
import s from './bookAuthor.module.css';

const BookAuthor = props => {
  return (
    <p className={s.bookAuthor}>{props.author}</p>
  )
}

export default BookAuthor;