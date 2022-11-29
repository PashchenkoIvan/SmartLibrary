import React from 'react';
import { Link } from 'react-router-dom';
import s from './btn.module.css';

const Btn = () => {
  return (
    <Link to='/catalog' className={s.btn} onClick={() => {window.scrollTo(0, 0)}}>
      Переглянути всі книжки
    </Link>
  )
}

export default Btn;