import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import s from './sideBar.module.css';
import { SideSignIn, RecBook } from '.';

const SideBar = props => {
  const [recBooks, setBooks] = useState(props.currentBook.recBooks);
  const recBooksAdd = recBooks.map(
    id => 
      <div className={s.recBookContainer}>
        <Link to={`/catalog/${id}`} className={s.link} onClick={() => {this.forceUpdate()}}>
          <RecBook linkToBook={props.books.reduce((res, obj) => obj.id == id ? obj : res, {}).linkToBook}
                   bookName={props.books.reduce((res, obj) => obj.id == id ? obj : res, {}).bookName}
                   bookImg={props.books.reduce((res, obj) => obj.id == id ? obj : res, {}).bookImg} />
        </Link>
        <span className={s.recBookGanre}>{props.books.reduce((res, obj) => obj.id == id ? obj : res, {}).ganreText}</span>
      </div>
    )
  
  return (
    <div className={s.sideBar}>
      <SideSignIn />
      {recBooksAdd}
    </div>
  )
}

export default SideBar;