import React from 'react'
import s from './header.module.css'
import { Logo } from '../../../assets/imgMainPage'
import { Menu, Navbar } from '../../containers'
const Header = () => {
	const VeiwMenu = () => {
		const m = document.getElementById('menu')
		if (m.style.display === 'none') {
			m.style.display = 'flex'
		} else {
			m.style.display = 'none'
		}
	}
	return (
		<div>
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
		</div>
	)
}

export default Header
