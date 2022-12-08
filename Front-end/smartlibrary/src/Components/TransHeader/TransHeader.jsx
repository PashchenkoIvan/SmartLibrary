import s from './TransHeader.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import sample from './video/videoplayback.mp4';

const TransHeader = () => {
	return (
		<div className={s.container}>
			{/* <video className={s.videoTag} autoPlay loop muted>
          <source src={sample} type='video/mp4' />
      </video>
      <div className={s.blueFilter}>
        <div className={s.centerBlock}>
          <h1>Вітаємо, раді вас бачити</h1>
          <p>Бібліотека Новоолександрівської сільської ради Філія №1</p>
          <div className={s.inputBlock}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" >
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input type="text" placeholder='Введіть назву книги або автора'/>
            <button></button>
          </div>
        </div>
      </div> */}
			<div className={s.inner}>
				<div className={s.logo}></div>
				<div className={s.navlinksBlock}>
					<a href='/' className={s.link}>
						Головна
					</a>
					<a href='/catalog' className={s.link}>
						Каталог книг
					</a>
<<<<<<< HEAD
					<a href='/contacts' className={s.link}>Контакти</a>
					<a className={s.link}>Як це працює</a>
=======
					<a className={s.link}>Контакти</a>
					<a href='/faq/making-orders' className={s.link}>
						Як це працює
					</a>
>>>>>>> 3822629eee7e7e67db00df346a86323b9071251d
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

export default TransHeader;
