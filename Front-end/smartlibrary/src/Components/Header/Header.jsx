import { useEffect, useRef, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import s from './Header.module.css';
import { AuthContext } from '../../index';
import HeaderMenu from './HeaderMenu/HeaderMenu';

import { useScroll } from 'framer-motion';

const Header = ({ menuActive, setMenuActive, header }) => {
	const { scrollY } = useScroll();
	const navigate = useNavigate();
	const Auth = useContext(AuthContext);

	const background = useRef();
	const whiteBackground = useRef();

	const [scrollYValue, setScrollYValue] = useState(0);

	useEffect(() => {
		if (header) background.current.style.display = 'none';
		else background.current.style.display = 'block';
	}, [header]);

	useEffect(() => {
		if (menuActive)
			document.querySelector('body').classList.add('hiddenForMenu');
		else document.querySelector('body').classList.remove('hiddenForMenu');
	}, [menuActive]);

	useEffect(() => {
		return scrollY.onChange(latest => setScrollYValue(latest));
	}, []);

	useEffect(() => {
		if (header) {
			if (scrollYValue > 0) {
				whiteBackground.current.classList.add(s.whiteBackgroundBlock);
				whiteBackground.current.classList.remove(s.whiteBackgroundNone);
				whiteBackground.current.classList.add(s.whiteBackgroundShowed);
				whiteBackground.current.classList.remove(s.whiteBackgroundHidden);
			} else {
				whiteBackground.current.classList.remove(s.whiteBackgroundShowed);
				whiteBackground.current.classList.add(s.whiteBackgroundHidden);
				setTimeout(() => {
					whiteBackground.current.classList.remove(s.whiteBackgroundBlock);
					whiteBackground.current.classList.add(s.whiteBackgroundNone);
				}, 200);
			}
		} else {
			whiteBackground.current.classList.remove(s.whiteBackgroundBlock);
			whiteBackground.current.classList.add(s.whiteBackgroundNone);
			whiteBackground.current.classList.remove(s.whiteBackgroundShowed);
		}
	}, [scrollYValue]);

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
					onClick={() => setMenuActive(false)}
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
					{Auth.status !== 'anonym' ? (
						<Link
							to='/'
							className={s.link}
							onClick={() => {
								Auth.AuthService.makeLogout();
								return this.forceUpdate()
							}}
						>
							Вийти
						</Link>
					) : (
						''
					)}
					{Auth.status === 'user' ? (
						<Link to='/personPage' className={s.blueLink}>
							Особистий кабінет
						</Link>
					) : Auth.status === 'librarian' ? (
						<Link to='/admin/readers' className={s.blueLink}>
							Адмін панель
						</Link>
					) : (
						<Link to='/login' className={s.blueLink}>
							Увійти в особистий кабінет
						</Link>
					)}
				</div>
				<button
					className={s.burger}
					onClick={() => {
						setMenuActive(!menuActive);
					}}
				>
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
