import s from './NewsBlock.module.css';
import React from 'react';

const NewsBlock = (props) => {
  return (
    <div className={s.container}>
        <p className={s.actualNewsText}>Актуальні новини</p>
        <p className={s.new}>{props.new}</p>
    </div>
  )
}

export default NewsBlock;