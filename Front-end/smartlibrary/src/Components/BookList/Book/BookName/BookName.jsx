import React from 'react';
import { Link } from 'react-router-dom';
import s from './bookName.module.css';

const BookName = props => {
  return (
    <p className={s.bookName}>
      <Link to={`/catalog/${props.linkToBook}`} className={s.bookNameLink}>{props.bookName}</Link>
    </p>
  )
}

export default BookName;