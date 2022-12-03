import React from 'react'
import s from './ContItem.module.css'
import { Point } from '../../../assets'

function ContPoint() {
	return (
		<div className={s.containerItem}>
			<img className={s.itemImgPoint} src={Point} alt='Point' />
			<a
				href='https://www.google.com/maps/place/%D0%B2%D1%83%D0%BB.+%D0%9D%D0%B0%D1%83%D0%BA%D0%BE%D0%B2%D0%B0,+20,+%D0%94%D0%BE%D1%81%D0%BB%D1%96%D0%B4%D0%BD%D0%B5,+%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE%D0%BF%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+52071/@48.3872864,35.0324823,17z/data=!3m1!4b1!4m5!3m4!1s0x40dbfb13c13f5433:0x3937755b663960b6!8m2!3d48.3872864!4d35.0324823'
				className={s.containerTexts}
			>
				<p className={s.itemText}>c. Дослідне</p>
				<p className={s.itemText}>вул. Наукова 20</p>
			</a>
		</div>
	)
}

export default ContPoint
