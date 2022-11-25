import { React } from 'react';
import s from './recBook.module.css';

const RecBook = props => {
  return (
    <>
      <div className={s.recBook}>
          <div className={s.insetShadow}></div>
          <img className={s.bookImg} src={props.bookImg} alt={props.bookName} />
          <div className={s.backCover} style={{ backgroundImage: 'url(' + props.bookImg + ')' }}></div>
      </div>
      <h3 className={s.recBookCaption}>{props.bookName}</h3>
    </>
  )
}

export default RecBook;