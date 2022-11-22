import React from 'react'
import s from './footer.module.css'
import { ContClock, ContPhone, ContPoint, ContLogo } from '../../containers'

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

export default Footer
