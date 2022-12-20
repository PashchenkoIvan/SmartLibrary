import { useEffect } from 'react';
import { useState } from 'react';
import { BookImg, BookInfo, BookDesc } from ".";

import s from './content.module.css';

const Content = props => {
  const [book, setBook] = useState(props.book);

  useEffect(() => {
    setBook(props.book)
  }, [props.book])

  return (
    <div className={s.content}>
      <div className={s.bookFullInfo}>
        <BookImg title={book.book.title} 
                 cover_img_path={book.book.cover_img_path} />
        <BookInfo title={book.book.title}
                  author={book.book.author} 
                  language={book.book.language}
                  number_of_pages={book.book.number_of_pages} 
                  book_type={book.book.book_type}
                  isbn={book.book.isbn} 
                  pubication_year={book.book.pubication_year}
                  isLoading={props.book.isLoading} />
      </div>
      <BookDesc description={book.book.description} />
    </div>
  )
}

export default Content;