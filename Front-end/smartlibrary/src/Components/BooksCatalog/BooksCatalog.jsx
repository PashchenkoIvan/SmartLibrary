import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SideBar, ContentBlock } from '.';
import s from './booksCatalog.module.css';

const BooksCatalog = props => {
  const [books, setBooks] = useState(props.data.books);
  const { booksCategoryId } = useParams();

  useEffect(
    () => {
      if (booksCategoryId !== undefined) {
        const filteredBooksByCategory = props.data.books.filter(b => b.bookCategories.find(el => el === booksCategoryId));
        setBooks(filteredBooksByCategory);
      } else { setBooks(props.data.books) }
      
    }, [booksCategoryId, props.data.books],
  );

  return (
    <div className={s.container}>
      <div className={s.row}>
        <SideBar books={props.data.books} />
        <ContentBlock books={books} />
      </div>
    </div>
  )
}

export default BooksCatalog;