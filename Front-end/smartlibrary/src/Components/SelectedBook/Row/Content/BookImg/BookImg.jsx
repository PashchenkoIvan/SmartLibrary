import { React } from 'react';
import s from './bookImg.module.css';

const BookImg = props => {
  return (
    <div className={s.container}>
      <div className={s.insetShadow}></div>
      <img className={s.bookImg} src={props.bookImg} alt={props.bookName} />
      <div className={s.backCover} style={{ backgroundImage: 'url(' + props.bookImg + ')' }}></div>
    </div>
  )
}

export default BookImg;