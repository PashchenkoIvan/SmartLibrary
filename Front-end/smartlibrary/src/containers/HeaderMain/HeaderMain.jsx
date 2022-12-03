import React from 'react'
import s from './HeaderMain.module.css'
import { Header } from '../../containers'
import { VideoBg } from '../../assets'
function HeaderMain() {
	return (
		<div className={s.HeaderMain}>
			<div className={s.headerVideoBg}>
				<video className={s.videoBg} src={VideoBg} autoPlay loop muted />
			</div>
			<div className={s.headerBg}>
				<Header />
				<h1 className={s.headerTitle}>Вітаємо, раді вас бачити</h1>
				<h2 className={s.headerTitleInfo}>
					Бібліотека Новоолександрівської сільської ради Філія №1
				</h2>
				<div className={s.search}>
					<div className={s.searchBlock}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							class='w-6 h-6'
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
							/>
						</svg>
						<input
							className={s.searchPole}
							type='text'
							placeholder='Введіть назву книги або автора'
						/>
					</div>
					<button className={s.searchButton}>Шукати</button>
				</div>
			</div>
		</div>
	)
}

export default HeaderMain
