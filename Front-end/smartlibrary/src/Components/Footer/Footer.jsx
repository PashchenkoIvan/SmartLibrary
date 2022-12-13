import React from 'react'
import s from './Footer.module.css'
import ContClock from './ContItem/ContClock'
import ContLogo from './ContItem/ContLogo'
import ContPhone from './ContItem/ContPhone'
import ContPoint from './ContItem/ContPoint'

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={s.footerContainer}>
				<ContClock />
				<ContPhone />
				<ContPoint />
				<ContLogo />
			</div>
		</footer>
	)
}

export default Footer;
