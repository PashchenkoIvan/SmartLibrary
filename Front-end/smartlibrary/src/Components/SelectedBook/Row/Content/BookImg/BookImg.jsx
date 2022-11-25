import { React } from 'react';
import s from './bookImg.module.css';

const BookImg = props => {
  return (
    <div className={s.container} style={{ backgroundImage: 'url(' + props.bookImg + ')' }}>
      <div className={s.insetShadow}></div>
      <div className={s.backCover} style={{ backgroundImage: 'url(' + props.bookImg + ')' }}></div>
    </div>
  )
}

export default BookImg;