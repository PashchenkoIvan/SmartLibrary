import React from 'react';
import s from './row.module.css';
import { Content, SideBar } from '.';

const Row = props => {
  return (
    <div className={s.row}>
      <Content currentBook={props.currentBook} />
      <SideBar currentBook={props.currentBook} books={props.books} />
    </div>
  )
}

export default Row;