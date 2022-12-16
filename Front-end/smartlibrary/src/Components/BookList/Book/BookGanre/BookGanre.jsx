import React from 'react';
import s from './bookGanre.module.css';

const BookGanre = props => {
  return (
    <span className={s.bookGanre}>
      <img className={s.bookGanreImg} src="http://1.smart-library.in.ua/img/icon.png" alt='' />
      <span>{props.category[0]}</span>
    </span>
  )
}

export default BookGanre;