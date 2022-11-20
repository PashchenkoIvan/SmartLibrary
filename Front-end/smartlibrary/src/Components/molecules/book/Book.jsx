import React from 'react';
import './book.css';
import { BookGanre, BookEffect, BookLight, BookInside,BookAuthor, BookName } from '../../atoms';

const Book = props => {
  return (
    <div className='book'>  
      <a href={props.linkToBook}>
      <div className='bookCover'>  
        <BookGanre ganreImg={props.ganreImg} ganreText={props.ganreText} />
        <BookEffect />
        <BookLight />
      </div>
      </a>
      <BookInside />
      <div className='bookInfo'>  
        <BookAuthor bookAuthor={props.bookAuthor} />
        <BookName linkToBook={props.linkToBook} bookName={props.bookName} />
      </div>
    </div>
  )
}

export default Book;