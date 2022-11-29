import React from 'react';
import { BookGanre, BookAuthor, BookName } from '.';

import s from './book.module.css';

const Book = props => {
  const imgUrl = props.bookImg;

  return (
    <div className={s.book}>  
      <div className={s.bookCover} style={{ backgroundImage: 'url(' + imgUrl + ')' }}>  
        <BookGanre ganreImg={props.ganreImg} ganreText={props.ganreText} />
        <div className={s.bookEffect}></div>
        <div className={s.bookLight}></div>
      </div>
      <div className={s.bookInside}></div>
      <div className={s.bookInfo}>  
        <BookAuthor bookAuthor={props.bookAuthor} />
        <BookName linkToBook={props.linkToBook} bookName={props.bookName} />
      </div>
    </div>
  )
}

export default Book;