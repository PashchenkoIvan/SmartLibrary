import React from 'react';
import s from './btn.module.css';

const Btn = props => {
  return (
    <button className={s.seeAllBook}>{props.btnText}</button>
  )
}

export default Btn;