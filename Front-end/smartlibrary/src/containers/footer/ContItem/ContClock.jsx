import React from 'react'
import s from './ContItem.module.css'
import { Clock } from '../../../assets'

const ContClock = () => {
	return (
		<div className={s.containerItem}>
			<img className={s.itemImg} src={Clock} alt='Clock' />
			<div className={s.containerTexts}>
				<p className={s.itemText}>Вт-Сб: 9:00 - 18:00</p>
				<p className={s.itemText}>Вс-Пн:Вихідний</p>
			</div>
		</div>
	)
}

export default ContClock
