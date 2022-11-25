import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import s from './sideBar.module.css';
import { SideSignIn, RecBook } from '.';

const SideBar = props => {
  const [recBooks, setBooks] = useState(props.currentBook.recBooks);
  const recBooksAdd = recBooks.map(
    (id, index) => 
      <div className={s.recBookContainer}>
        <Link to={`/catalog/${id}`} onClick={() => {this.forceUpdate()}}>
          <RecBook linkToBook={props.books[id].linkToBook}
                   bookName={props.books[id].bookName}
                   bookImg={props.books[id].bookImg} />
        </Link>
        <span className={s.recBookGanre}>{props.books[id].ganreText}</span>
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