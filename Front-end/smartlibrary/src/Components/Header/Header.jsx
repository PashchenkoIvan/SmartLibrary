import s from './Header.module.css';
import { Link } from 'react-router-dom';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import { useEffect, useRef } from 'react';

const Header = ({ menuActive, setMenuActive, header }) => {
	const background = useRef();
	const whiteBackground = useRef();

	useEffect(() => {
		if (header) background.current.style.display = 'none';
		else background.current.style.display = 'block';
	}, [header]);

	useEffect(() => {
		if (menuActive && header) {
			whiteBackground.current.style.display = 'block';
			whiteBackground.current.classList.add(s.whiteBackgroundShowed);
		} else {
			whiteBackground.current.style.display = 'none';
		}
	});

	return (
		<div className={s.container}>
			<div className={s.background} ref={background} />
			<div className={s.whiteBackground} ref={whiteBackground} />
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
					<Link to='/' className={s.link}>
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
				<HeaderMenu menuActive={menuActive} setMenuActive={setMenuActive} />
			</div>
		</div>
	);
};
export default Header;
