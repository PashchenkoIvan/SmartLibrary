import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book/Book';
import s from './bookList.module.css';

const BookList = props => {
  const [books, setBooks] = useState(props.books);
  const [booksAmount, setBooksAmount] = useState(12);

  const bookCreating = (b, counter, isLoading) => {
    console.log(b)
    if (counter < booksAmount) {
      return (
        <Link to={isLoading ? `` : `selected-book/${b.title}`} onClick={() => {window.scrollTo(0, 0)}}>
          <Book isLoading={isLoading}
                author={`#${b.author}`}
                title={b.title}
                cover_img_path={b.cover_img_path}
                category={b.category} />
        </Link>
      )
    } else { }
  }

  let booksCounter = 0;
  const bookMapAdd = props.books.books.map(el => { booksCounter = 0; return el;}).map((b) => (bookCreating(b, booksCounter++, books.isLoading)))

  useEffect(
    () => {
      setBooksAmount(12);
      setBooks(props.books);
    }, [props.books],
  );

  return (
    <>
      <div className={s.bookList}>
        {/* {console.log(props.books.books)} */}
        {bookMapAdd}
      </div>
      <div className={s.btnContainer}>
      {
        function() {
          if (window.location.href.match(/catalog/)) {
            return(
              <button className={s.btn} onClick={() => setBooksAmount((c) => c + 12)}>
                Показати ще
              </button>
            )
          } else { }
        }()
      }
    </div>
  </>
  )
}

export default BookList;