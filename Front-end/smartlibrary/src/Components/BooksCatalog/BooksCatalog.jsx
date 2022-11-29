import { React, useState, useEffect } from 'react';
import { SideBar, ContentBlock } from '.';
import s from './booksCatalog.module.css';

const BooksCatalog = props => {
  const [books, setBooks] = useState(props.data.books);

  return (
    <div className={s.container}>
      <div className={s.row}>
        <SideBar books={books} />
        <ContentBlock books={books} />
      </div>
    </div>
  )
}

export default BooksCatalog;