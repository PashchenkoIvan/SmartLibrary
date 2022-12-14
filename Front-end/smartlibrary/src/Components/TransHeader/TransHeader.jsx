import s from './TransHeader.module.css';
import { Link } from 'react-router-dom';
import sample from './video/videoplayback.mp4';

const TransHeader = () => {
	return (
		<div className={s.container}>
			<div className={s.inner}>
				<Link to='/' className={s.link}>
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
			</div>
			<video className={s.videoTag} autoPlay loop muted>
				<source src={sample} type='video/mp4' />
			</video>
			<div className={s.blueFilter} />
			<div className={s.headerSearch}>
				<h1>Вітаємо, раді вас бачити</h1>
				<p>Бібліотека Новоолександрівської сільської ради Філія №1</p>
				<div className={s.inputBlock}>
					<div className={s.searchIcon}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
							/>
						</svg>
					</div>
					<input type='text' placeholder='Введіть назву книги або автора' />
					<button>Шукати</button>
				</div>
			</div>
		</div>
	);
};

export default TransHeader;
