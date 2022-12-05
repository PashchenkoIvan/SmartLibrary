import s from './Header.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div className={s.container}>
			<div className={s.inner}>
				<div className={s.logo}></div>
				<div className={s.navlinksBlock}>
					<NavLink to='/main' className={s.link}>
						Головна
					</NavLink>
					<NavLink to='/catalog' className={s.link}>
						Каталог книг
					</NavLink>
					<NavLink className={s.link}>Контакти</NavLink>
					<NavLink className={s.link}>Як це працює</NavLink>
					<NavLink to='/admin/readers' className={s.link}>
						Бібліотекар
					</NavLink>
					<NavLink className={s.link}>Вийти</NavLink>
					<NavLink to='/personPage' className={s.blueLink}>
						Особистий кабінет
					</NavLink>
				</div>
			</div>
		</div>
	);
};
export default Header;