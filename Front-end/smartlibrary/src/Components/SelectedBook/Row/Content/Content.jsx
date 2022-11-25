import { React } from 'react';
import { BookImg, BookInfo, BookDesc } from ".";

import s from './content.module.css';

const Content = props => {
  return (
    <div className={s.content}>
      <div className={s.bookFullInfo}>
        <BookImg bookName={props.currentBook.bookName} 
                 bookImg={props.currentBook.bookImg} />
        <BookInfo bookName={props.currentBook.bookName}
                  bookAuthor={props.currentBook.bookAuthor} 
                  lang={props.currentBook.lang}
                  pageAmount={props.currentBook.pageAmount} 
                  bookType={props.currentBook.bookType}
                  ISBN={props.currentBook.ISBN} 
                  dateOfPublication={props.currentBook.dateOfPublication} />
      </div>
      <BookDesc bookDesc={props.currentBook.bookDesc} />
    </div>
  )
}

export default Content;