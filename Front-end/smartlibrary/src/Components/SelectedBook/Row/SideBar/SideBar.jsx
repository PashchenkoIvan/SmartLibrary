import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import s from './sideBar.module.css';
import { SideSignIn, RecBook } from '.';

const SideBar = props => {
  const [recBooks, setRecBooks] = useState(props.currentBook.recBooks);
  const [books, setBooks] = useState(props.books);

  const recBooksAdd = recBooks.map(
    id => 
      <div className={s.recBookContainer}>
        <Link to={`/${id}`} className={s.link} onClick={() => {this.forceUpdate()}}>
          <RecBook linkToBook={books.reduce((res, obj) => obj.id == id ? obj : res, {}).linkToBook}
                   bookName={books.reduce((res, obj) => obj.id == id ? obj : res, {}).bookName}
                   bookImg={books.reduce((res, obj) => obj.id == id ? obj : res, {}).bookImg} />
        </Link>
        <span className={s.recBookGanre}>{books.reduce((res, obj) => obj.id == id ? obj : res, {}).ganreText}</span>
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