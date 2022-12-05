import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Menu.module.css'
import { Play } from '../images'

const Menu = () => {
	return (
		<nav className={s.menu} id='menu'>
			<NavLink className={s.navLink} to='/'>
				Каталог книг
			</NavLink>
			<NavLink className={s.navLink} to='/'>
				<img className={s.navLinkPlay} src={Play} alt='Play' />
				Як це працює?
			</NavLink>
			<NavLink className={s.navLink} to='/'>
				Контакти
			</NavLink>
			<NavLink className={s.navLink} to='/login-lib'>
				Бібліотекар
			</NavLink>
			<NavLink className={s.navLink} to='/login-user'>
				Особистий кабінет
			</NavLink>
		</nav>
	)
}

export default Menu
