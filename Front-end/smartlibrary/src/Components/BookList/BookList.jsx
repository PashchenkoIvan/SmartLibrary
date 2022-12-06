import { React, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Book from './Book/Book';
import s from './bookList.module.css';

const BookList = props => {
  const { booksCategoryId } = useParams();
  const [books, setBooks] = useState(props.books);
  const [booksAmount, setBooksAmount] = useState(12);
  // const booksCategoryMap = books.map(el => el.bookCategories.filter(el => el === booksCategoryId).length  ? el.id : '').filter(el => el !== '');

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
  const bookMapAdd = books.map(el => { booksCounter = 0; return el; }).map(
    (b) =>
      {
        if (window.location.href.match(/(3000\/)$/) && b.isPopularBook) {
          return(bookCreating(b, booksCounter++));
        } else if ((b.bookCategories.find(el => el === booksCategoryId)) || window.location.href.match(/(catalog)$/)) {
          return(bookCreating(b, booksCounter++));
        } else {  }
      })

  useEffect(
    () => {
      setBooksAmount(12);
    }, [booksCategoryId],
  );

  return (
    <div className={s.bookList}>
      {bookMapAdd}
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
    </div>
  )
}

export default BookList;