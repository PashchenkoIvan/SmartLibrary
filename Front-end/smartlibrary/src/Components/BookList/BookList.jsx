import { React, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Book from './Book/Book';
import s from './bookList.module.css';

const BookList = props => {
  const { booksCategoryId } = useParams();
  const [books, setBooks] = useState(props.books);
  const [booksAmount, setBooksAmount] = useState(12);

  const bookCreating = (b, counter) => {
    if (counter < booksAmount) {
      return (
        <Link to={`/${b.id}`} onClick={() => {window.scrollTo(0, 0)}}>
          <Book bookAuthor={`#${b.bookAuthor}`}
                linkToBook={b.linkToBook}
                bookName={b.bookName}
                bookImg={b.bookImg}
                ganreImg={b.ganreImg}
                ganreText={b.ganreText} />
        </Link>
      )
    } else { }
  }

  let booksCounter = 0;
  const bookMapAdd = books.map(el => { booksCounter = 0; return el; }).map((b) => (bookCreating(b, booksCounter++)))

  useEffect(
    () => {
      setBooksAmount(12);
      setBooks(props.books);
    }, [booksCategoryId, props.books],
  );

  return (
    <>
      <div className={s.bookList}>
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