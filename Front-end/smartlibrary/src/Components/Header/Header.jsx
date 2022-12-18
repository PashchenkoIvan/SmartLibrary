import s from './Header.module.css';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	const menu = useRef(null);
	const [menuActive, setMenuActive] = useState(false);

	useEffect(() => {
		menu.current.style.top = '-240px';
	}, []);

	useEffect(() => {
		let start = -140,
			end = 100;
		let menuStyle = menu.current.style;
		if (menuActive) {
			let i = start;
			let showMenu = setInterval(() => {
				if (menuStyle.top == `${end}px`) clearInterval(showMenu);
				else {
					menuStyle.top = i + 'px';
					i += 10;
				}
			});
		} else {
			let i = end;
			let hideMenu = setInterval(() => {
				if (menuStyle.top == `${start}px`) clearInterval(hideMenu);
				else {
					menuStyle.top = i + 'px';
					i -= 10;
				}
			});
		}
	}, [menuActive]);
	return (
		<div className={s.container}>
			<div className={s.background} />
			<div className={s.inner}>
				<Link to='/'>
					<div className={s.logo}></div>
				</Link>
				<div className={s.navlinksBlock}>
					<Link to='/catalog' className={s.link}>
						Каталог книг
					</Link>
					<Link to='/contacts' className={s.link}>
						Контакти
					</Link>
					<Link to='./faq/making-orders' className={s.link}>
						Як це працює
					</Link>
					<Link to='/admin/readers' className={s.link}>
						Бібліотекар
					</Link>
					<Link to='' className={s.link}>
						Вийти
					</Link>
					<Link to='/personPage' className={s.blueLink}>
						Особистий кабінет
					</Link>
				</div>
				<button className={s.burger} onClick={() => setMenuActive(!menuActive)}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
						/>
					</svg>
				</button>
			</div>
			<div className={s.menu} ref={menu}>
				<div className={s.navlinksBlockMenu}>
					<Link to='/catalog' className={s.link}>
						Каталог книг
					</Link>
					<Link to='/contacts' className={s.link}>
						Контакти
					</Link>
					<Link to='/faq/making-orders' className={s.link}>
						Як це працює
					</Link>
					<Link to='/admin/readers' className={s.link}>
						Бібліотекар
					</Link>
					<Link className={s.link}>Вийти</Link>
					<Link to='/personPage' className={s.blueLink}>
						Особистий кабінет
					</Link>
				</div>
			</div>
		</div>
	);
};
export default Header;
