import { React } from 'react';
import { Link } from 'react-router-dom';
import s from './sideSignIn.module.css';

const SideSignIn = props => {
  return (
    <div className={s.sideSignIn}>
      Для бронювання книги <Link to="/admin/*" className={s.link}>авторизуйтесь</Link> в особистому кабінеті
    </div>
  )
}

export default SideSignIn;