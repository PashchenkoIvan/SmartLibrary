import { React } from 'react';
import s from './bookDesc.module.css';

const BookDesc = props => {
  return (
    <p className={s.bookDesc}>{props.bookDesc}</p>
  )
}

export default BookDesc;