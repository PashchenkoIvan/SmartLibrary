import React from 'react';
import './bookAuthor.css';

const BookAuthor = props => {
  return (
    <p className='bookAuthor'>{props.bookAuthor}</p>
  )
}

export default BookAuthor;