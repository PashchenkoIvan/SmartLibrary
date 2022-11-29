import React from 'react';
import s from './bookAuthor.module.css';

const BookAuthor = props => {
  return (
    <p className={s.bookAuthor}>{props.bookAuthor}</p>
  )
}

export default BookAuthor;