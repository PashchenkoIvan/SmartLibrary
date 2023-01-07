import { useEffect, useRef, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import s from './Header.module.css';
import HeaderMenu from './HeaderMenu/HeaderMenu';

import { useScroll } from 'framer-motion';
import { ServicesContext } from '../..';

const Header = ({ menuActive, setMenuActive, header, status }) => {
	const { scrollY } = useScroll();
	const navigate = useNavigate();
	const Services = useContext(ServicesContext);

	const background = useRef();
	const whiteBackground = useRef();

	const burger_row_1 = useRef();
	const burger_row_2 = useRef();
	const burger_row_3 = useRef();

	const [scrollYValue, setScrollYValue] = useState(0);
	const [firstRender, setFirstRender] = useState(true);

	useEffect(() => {
		if (header) background.current.style.display = 'none';
		else background.current.style.display = 'block';
	}, [header]);

	useEffect(() => {
		if (menuActive) {
			document.querySelector('body').classList.add('hiddenForMenu');
		} else {
			document.querySelector('body').classList.remove('hiddenForMenu');
		}

		if (firstRender) {
			setFirstRender(false);
		} else {
			if (menuActive) {
				burger_row_1.current.classList.add(s.rotateDown);
				burger_row_2.current.classList.add(s.hide);
				burger_row_3.current.classList.add(s.rotateUp);
			} else {
				burger_row_1.current.classList.add(s.rotateDownRev);
				burger_row_2.current.classList.add(s.hideRev);
				burger_row_3.current.classList.add(s.rotateUpRev);

				burger_row_1.current.classList.remove(s.rotateDown);
				burger_row_2.current.classList.remove(s.hide);
				burger_row_3.current.classList.remove(s.rotateUp);

				setTimeout(() => {
					burger_row_1.current.classList.remove(s.rotateDownRev);
					burger_row_2.current.classList.remove(s.hideRev);
					burger_row_3.current.classList.remove(s.rotateUpRev);
				}, 200);
				setFirstRender(false);
			}
		}
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
	}, [scrollYValue, header]);

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
					{status !== 'anonym' ? (
						<Link
							to='/'
							className={s.link}
							onClick={() => {
								Services.AuthService.Logout();
								return this.forceUpdate();
							}}
						>
							Вийти
						</Link>
					) : (
						''
					)}
					{status === 'user' ? (
						<Link to='/personPage' className={s.blueLink}>
							Особистий кабінет
						</Link>
					) : status === 'librarian' ? (
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
					<div ref={burger_row_1} className={s.burger_row}></div>
					<div ref={burger_row_2} className={s.burger_row}></div>
					<div ref={burger_row_3} className={s.burger_row}></div>
				</button>
				<HeaderMenu
					menuActive={menuActive}
					setMenuActive={setMenuActive}
					status={status}
				/>
			</div>
		</div>
	);
};
export default Header;
