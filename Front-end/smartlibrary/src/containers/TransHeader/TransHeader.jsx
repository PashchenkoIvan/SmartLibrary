import s from './TransHeader.module.css'
import React from 'react'
import { Logo } from '../../../assets/imgMainPage'
import { Navbar, Menu } from '../../containers'

const TransHeader = () => {
	const VeiwMenu = () => {
		const m = document.getElementById('menu')
		if (m.style.display === 'none') {
			m.style.display = 'flex'
		} else {
			m.style.display = 'none'
		}
	}
	return (
		<header className={s.header}>
			<div className={s.headerTop}>
				<img className={s.headerLogo} src={Logo} alt='Logo' />
				<Navbar />
				<Menu />
				<button className={s.headerNavBurger} onClick={VeiwMenu}>
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
		</header>
	)
}

export default TransHeader
