import React from 'react';
import s from './bookName.module.css';

const BookName = props => {
  return (
    <p className={s.bookName}>
      <a className={s.bookNameLink} href={props.linkToBook}>{props.bookName}</a>
    </p>
  )
}

export default BookName;