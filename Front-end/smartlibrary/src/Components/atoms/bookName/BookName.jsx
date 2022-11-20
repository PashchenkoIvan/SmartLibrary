import React from 'react';
import './bookName.css';

const BookName = props => {
  return (
    <p className='bookName'>
      <a className='bookName-link' href={props.linkToBook}>{props.bookName}</a>
    </p>
  )
}

export default BookName;