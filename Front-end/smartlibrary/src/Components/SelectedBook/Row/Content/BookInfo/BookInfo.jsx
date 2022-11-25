import { React } from 'react';
import s from './bookInfo.module.css';

const BookInfo = props => {
  return (
    <div className={s.container}>
      <h2 className={s.bookName}>{props.bookName}</h2>
      <ul className={s.listParams}>
        <li className={s.singleParam}>
          <span className={s.paramKey}>Автор</span>
          <span className={s.paramValue}>{props.bookAuthor}</span>
        </li>
        <li className={s.singleParam}>
          <span className={s.paramKey}>Мова</span>
          <span className={s.paramValue}>{props.lang}</span>
        </li>
        <li className={s.singleParam}>
          <span className={s.paramKey}>Кількість сторінок</span>
          <span className={s.paramValue}>{props.pageAmount}</span>
        </li>
        <li className={s.singleParam}>
          <span className={s.paramKey}>Тип книги</span>
          <span className={s.paramValue}>{props.bookType}</span>
        </li>
        <li className={s.singleParam}>
          <span className={s.paramKey}>ISBN</span>
          <span className={s.paramValue}>{props.ISBN}</span>
        </li>
        <li className={s.singleParam}>
          <span className={s.paramKey}>Дата видання</span>
          <span className={s.paramValue}>{props.dateOfPublication}</span>
        </li>
      </ul>
    </div>
  )
}

export default BookInfo;