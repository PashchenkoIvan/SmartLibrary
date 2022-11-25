import s from './Library.module.css';
import React from 'react'
import { BookTable } from './BookTable/BookTable';

export const Library = () => {
  return (
    <div className={s.container}>
        <BookTable/>
    </div>
  )
}
