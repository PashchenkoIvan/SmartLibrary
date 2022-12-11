import s from './Library.module.css';
import React from 'react'
import BookTableBlock from './BookTable/BookTable';
import WillRead from './WillRead/WillRead';

export const Library = props => {
  return (
    <div className={s.container}>
        <BookTableBlock admin={props.admin} data={props.data} />
        <WillRead admin={props.admin} />
    </div>
  )
}
