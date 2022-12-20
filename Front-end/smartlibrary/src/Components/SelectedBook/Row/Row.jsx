import s from './row.module.css';
import { Content, SideBar } from '.';

const Row = props => {
  return (
    <div className={s.row}>
      <Content book={props.book} />
      <SideBar category={props.book.book.category} books={props.books} />
    </div>
  )
}

export default Row;