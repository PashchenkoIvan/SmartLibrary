import s from './Header.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className={s.container}>
			<div className={s.inner}>
				<div className={s.logo}></div>
				<div className={s.navlinksBlock}>
					<Link to='/' className={s.link}>
						Головна
					</Link>
					<Link to='/catalog' className={s.link}>
						Каталог книг
					</Link>
					<Link to='/contacts' className={s.link}>Контакти</Link>
					<Link className={s.link}>Як це працює</Link>
					<Link to='/admin/readers' className={s.link}>
						Бібліотекар
					</Link>
					<Link to='' className={s.link}>Вийти</Link>
					<Link to='/personPage' className={s.blueLink}>
						Особистий кабінет
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Header;
