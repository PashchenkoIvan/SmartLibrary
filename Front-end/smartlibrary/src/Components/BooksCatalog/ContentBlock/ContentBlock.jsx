import { React } from 'react';
import s from './contentBlock.module.css';
import BookList from '../../BookList/BookList'

const ContentBlock = props => {
  return (
    <div className={s.container}>
      <div className={s.searchInputContainer}>
        <input type="text" className={s.searchInput} placeholder="Пошук книги за назвою" />
        <i className="searchIcon"></i>
      </div>
      <div className={s.bookListContainer}>
        <BookList books={props.books} />
      </div>
    </div>
  )
}

export default ContentBlock;