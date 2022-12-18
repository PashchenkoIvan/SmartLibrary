import s from './Header.module.css';
import React, { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = ({ menuActive, setMenuActive }) => {
	const menu = useRef(null);

	useEffect(() => {
		if (menuActive) menu.current.style.top = 'calc(0vh + 100px)';
		else menu.current.style.top = 'calc(-100vh + 100px)';
	}, []);

	useEffect(() => {
		let start = -100,
			end = 0;
		let menuStyle = menu.current.style;
		if (menuActive) {
			let i = start;
			let showMenu = setInterval(() => {
				if (menuStyle.top == `calc(${end}vh + 100px)`) clearInterval(showMenu);
				else {
					menuStyle.top = `calc(${i}vh + 100px)`;
					i += 2;
				}
			}, 4);
		} else {
			let i = end;
			let hideMenu = setInterval(() => {
				if (menuStyle.top == `calc(${start}vh + 100px)`)
					clearInterval(hideMenu);
				else {
					menuStyle.top = `calc(${i}vh + 100px)`;
					i -= 2;
				}
			}, 4);
		}
	}, [menuActive]);

	return (
		<div className={s.container}>
			<div className={s.background} />
			<div className={s.inner}>
				<Link
					className={navData =>
						(navData.isActive ? s.isActive : s.notActive) + ' ' + s.item
					}
					to='/'
				>
					<div className={s.logo}></div>
				</Link>
				<div className={s.navlinksBlock}>
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
				<div className={s.columnMenu}>
					<NavLink
						className={navData =>
							(navData.isActive ? s.isActive : s.notActive) + ' ' + s.item
						}
						to='/catalog'
					>
						Каталог книг
					</NavLink>
					<NavLink
						className={navData =>
							(navData.isActive ? s.isActive : s.notActive) + ' ' + s.item
						}
						to='/contacts'
					>
						Контакти
					</NavLink>
					<NavLink
						className={navData =>
							(navData.isActive ? s.isActive : s.notActive) + ' ' + s.item
						}
						to='./faq/making-orders'
					>
						Як це працює
					</NavLink>
					<NavLink
						className={navData =>
							(navData.isActive ? s.isActive : s.notActive) + ' ' + s.item
						}
						to='/admin/readers'
					>
						Бібліотекар
					</NavLink>
					<NavLink
						className={navData =>
							(navData.isActive ? s.isActive : s.notActive) + ' ' + s.item
						}
						to=''
					>
						Вийти
					</NavLink>
					<NavLink
						className={navData =>
							(navData.isActive ? s.isActive : s.notActive) + ' ' + s.item
						}
						to='/personPage'
					>
						Особистий кабінет
					</NavLink>
				</div>
				<div className={s.contacts}>
					<a href='tel:+380932226111'>+38 093 22 26 111</a>
					<a href='https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB.+%D0%9D%D0%B0%D1%83%D0%BA%D0%BE%D0%B2%D0%B0,+20,+%D0%94%D0%BE%D1%81%D0%BB%D1%96%D0%B4%D0%BD%D0%B5,+%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE%D0%BF%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+52071/@48.3872864,35.0324823,17z/data=!3m1!4b1!4m5!3m4!1s0x40dbfb13c13f5433:0x3937755b663960b6!8m2!3d48.3872864!4d35.0324823'>
						<p>c. Дослідне вул. Наукова 20</p>
					</a>
				</div>
			</div>
		</div>
	);
};
export default Header;
