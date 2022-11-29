import s from './Library.module.css';
import React from 'react'
import BookTableBlock from './BookTable/BookTable';
import WllRead from './WillRead/WllRead';

export const Library = () => {
  return (
    <div className={s.container}>
        <BookTableBlock/>
        <WllRead/>
    </div>
  )
}
