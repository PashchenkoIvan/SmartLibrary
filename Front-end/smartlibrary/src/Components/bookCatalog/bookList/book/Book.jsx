import React from 'react';
import { BookGanre, BookAuthor, BookName } from './';

import s from './book.module.css';

const Book = props => {
  return (
    <div className={s.book}>  
      <a href={props.linkToBook}>
      <div className={s.bookCover}>  
        <BookGanre ganreImg={props.ganreImg} ganreText={props.ganreText} />
        <div className={s.bookEffect}></div>
        <div className={s.bookLight}></div>
      </div>
      </a>
      <div className={s.bookInside}></div>
      <div className={s.bookInfo}>  
        <BookAuthor bookAuthor={props.bookAuthor} />
        <BookName linkToBook={props.linkToBook} bookName={props.bookName} />
      </div>
    </div>
  )
}

export default Book;