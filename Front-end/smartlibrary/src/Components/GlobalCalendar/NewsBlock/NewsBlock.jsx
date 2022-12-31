import s from './NewsBlock.module.css';
import React from 'react';
import {Link} from 'react-router-dom'

const NewsBlock = (props) => {
  const func = () => {
    let href = props.AdminPage;
    if(href) {
      return(        
        <div className={s.addBtn}>
          <Link to='/admin/news/create'>+ Додати</Link>
        </div>
      );
    }
  }
  return (
    <div className={s.container}>
        <p className={s.actualNewsText}>Актуальні новини</p>
        <p className={s.new}>{props.new}</p>
        {func()}
    </div>
  )
}

export default NewsBlock;