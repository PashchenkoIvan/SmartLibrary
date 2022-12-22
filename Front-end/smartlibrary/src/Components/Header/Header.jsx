import { useEffect, useRef, useState, useContext } from 'react';
import { Link } from 'react-router-dom';


import s from './Header.module.css';
import { AuthContext } from '../../index';
import HeaderMenu from './HeaderMenu/HeaderMenu';

import { useScroll } from 'framer-motion';

const Header = ({ menuActive, setMenuActive, header }) => {
	const { scrollY } = useScroll();
	const {store} = useContext(AuthContext);

	const background = useRef();
	const whiteBackground = useRef();

	const [scrollYValue, setScrollYValue] = useState(0);

	useEffect(() => {
		if (header) background.current.style.display = 'none';
		else background.current.style.display = 'block';
	}, [header]);

	useEffect(() => {
		if (scrollYValue == 0 && menuActive)
			document.querySelector('body').classList.add('hiddenForMenu');
		else document.querySelector('body').classList.remove('hiddenForMenu');
	}, [scrollYValue, menuActive]);

	useEffect(() => {
		return scrollY.onChange(latest => setScrollYValue(latest));
	}, []);

	useEffect(() => {
		if (header) {
			if (scrollYValue > 0) {
				whiteBackground.current.style.display = 'block';
				whiteBackground.current.classList.add(s.whiteBackgroundShowed);
				whiteBackground.current.classList.remove(s.whiteBackgroundHidden);
			} else {
				whiteBackground.current.classList.remove(s.whiteBackgroundShowed);
				whiteBackground.current.classList.add(s.whiteBackgroundHidden);
				setTimeout(() => (whiteBackground.current.style.display = 'none'), 200);
			}
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
					{/* <Link to='/admin/readers' className={s.link}>
						Бібліотекар
					</Link> */}
					{store.status !== "anonym"
						? (
							<Link to='/' className={s.link} onClick={() => store.setStatus('anonym')}>
								Вийти
							</Link>
						)
						: ''
					}
					{store.status === "user"
						? (
							<Link to='/personPage' className={s.blueLink}>
								Особистий кабінет
							</Link>
						)
						: store.status === "librarian"
						? (
							<Link to='/admin/readers' className={s.blueLink}>
								Адмін панель
							</Link>
						)
						: (
							<Link to='/login' className={s.blueLink}>
								Увійти в особистий кабінет
							</Link>
						)
					}

					
				</div>
				<button
					className={s.burger}
					onClick={() => {
						setMenuActive(!menuActive);
						window.scrollTo(0, 0);
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
