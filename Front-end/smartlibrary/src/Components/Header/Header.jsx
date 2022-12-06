import s from './Header.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<div className={s.container}>
			<div className={s.inner}>
				<div className={s.logo}></div>
				<div className={s.navlinksBlock}>
					<a href='/main' className={s.link}>
						Головна
					</a>
					<a href='/catalog' className={s.link}>
						Каталог книг
					</a>
					<a className={s.link}>Контакти</a>
					<a className={s.link}>Як це працює</a>
					<a href='/admin/readers' className={s.link}>
						Бібліотекар
					</a>
					<a className={s.link}>Вийти</a>
					<a href='/personPage' className={s.blueLink}>
						Особистий кабінет
					</a>
				</div>
			</div>
		</div>
	);
};
export default Header;