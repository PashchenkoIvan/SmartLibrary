import React from 'react'
import s from './ContItem.module.css'
import { Logo } from '../../../assets'
function ContLogo() {
	return (
		<div className={s.containerItem}>
			<img className={s.itemImgLogo} src={Logo} alt='Logo' />
			<div className={s.containerTexts}>
				<p className={s.itemText}>
					Розроблено <span>#SmartLibrary</span>
				</p>
				<p className={s.itemText}>
					Інформація та зображення на сайті взяті <br /> з відкритих джерел.
				</p>
			</div>
		</div>
	)
}

export default ContLogo
