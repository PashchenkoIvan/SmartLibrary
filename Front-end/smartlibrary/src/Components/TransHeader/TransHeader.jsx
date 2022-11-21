import s from './TransHeader.module.css';
import React from 'react'
import { NavLink } from 'react-router-dom';

const TransHeader = () => {
  return (
    <div className={s.container}>
        <div className={s.logo}></div>
        <div className={s.navlinksBlock}>
            <NavLink to='/main' className={s.link}>Головна</NavLink>
            <NavLink to='/catalog' className={s.link}>Каталог книг</NavLink>
            <NavLink className={s.link}>Контакти</NavLink>
            <NavLink className={s.link}>Як це працює</NavLink>
            <NavLink className={s.link}>Бібліотекар</NavLink>
            <NavLink className={s.link}>Вийти</NavLink>
            <NavLink to='/admin/readers' className={s. blueLink}>Особистий кабінет</NavLink>
        </div>
    </div>
  )
}

export default TransHeader;