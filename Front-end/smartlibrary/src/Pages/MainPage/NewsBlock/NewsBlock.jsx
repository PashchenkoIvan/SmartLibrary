import s from './NewsBlock.module.css';
import React from 'react'
import { useState } from 'react';

const NewsBlock = () => {
    let [data, setData] = useState({
        date: '03.04.2005',
        new: 'Add calendar',
    });
  return (
    <div className={s.container}>
        <p className={s.actualNewsText}>Актуальні новини</p>
    </div>
  )
}

export default NewsBlock;