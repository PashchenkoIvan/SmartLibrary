import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import { Play } from '../../../assets/imgMainPage';

const Navbar = () => {
	return (
		<nav className={s.headerNav}>
			<NavLink className={s.navLink} to='/'>
				Каталог книг
			</NavLink>
			<NavLink className={s.navLink} to='/faq/making-orders'>
				<img className={s.navLinkPlay} src={Play} alt='Play' />
				Як це працює?
			</NavLink>
			<NavLink className={s.navLink} to='/contacts'>
				Контакти
			</NavLink>
			<NavLink className={s.navLink} to='/login-lib'>
				Бібліотекар
			</NavLink>
			<NavLink className={s.navLink} to='/login-user'>
				Особистий кабінет
			</NavLink>
		</nav>
	);
};

export default Navbar;
