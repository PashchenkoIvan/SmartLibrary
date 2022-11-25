import { React } from 'react';
import s from './recBook.module.css';

const RecBook = props => {
  return (
    <>
      <div className={s.recBook} style={{ backgroundImage: 'url(' + props.bookImg + ')' }}>
          <div className={s.insetShadow}></div>
          <div className={s.backCover} style={{ backgroundImage: 'url(' + props.bookImg + ')' }}></div>
      </div>
      <h3 className={s.recBookCaption}>{props.bookName}</h3>
    </>
  )
}

export default RecBook;