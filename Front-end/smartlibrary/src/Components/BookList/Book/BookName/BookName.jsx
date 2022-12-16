import s from './bookName.module.css';

const BookName = props => {
  return (
    <p className={s.bookName}>
      {props.title}
    </p>
  )
}

export default BookName;