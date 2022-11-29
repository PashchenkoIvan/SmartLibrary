import { React, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Book from './Book/Book';
import s from './bookList.module.css';

const BookList = props => {
  const { booksCategoryId } = useParams();
  const [books, setBooks] = useState(props.books);
  // const booksCategoryMap = books.map(el => el.bookCategories.filter(el => el === booksCategoryId).length  ? el.id : '').filter(el => el !== '');

  useEffect(
    () => {
    }, [booksCategoryId],
  );

  const bookMapAdd = books.map(
    b =>
      {
        if ((b.bookCategories.find(el => el === booksCategoryId)) || booksCategoryId === undefined) {
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
      })
    

  return (
    <div className={s.bookList}>
      {bookMapAdd}
    </div>
  )
}

export default BookList;