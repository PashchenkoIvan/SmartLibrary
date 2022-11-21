import React from 'react';
import s from './bookGanre.module.css';

const BookGanre = props => {
  return (
    <span className={s.bookGanre}>
      <img className={s.bookGanreImg} src={props.ganreImg} alt='' />
      <span>{props.ganreText}</span>
    </span>
  )
}

export default BookGanre;