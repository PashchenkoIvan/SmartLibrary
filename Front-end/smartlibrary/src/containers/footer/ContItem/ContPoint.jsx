import React from 'react'
import s from './ContItem.module.css'
import { Point } from '../../../assets'

function ContPoint() {
	return (
		<div className={s.containerItem}>
			<img className={s.itemImgPoint} src={Point} alt='Point' />
			<div className={s.containerTexts}>
				<p className={s.itemText}>c. Дослідне</p>
				<p className={s.itemText}>вул. Наукова 20</p>
			</div>
		</div>
	)
}

export default ContPoint
