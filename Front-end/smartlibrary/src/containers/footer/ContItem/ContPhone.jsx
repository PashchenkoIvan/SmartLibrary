import React from 'react'
import s from './ContItem.module.css'
import { Phone } from '../../../assets'

function ContPhone() {
	return (
		<div className={s.containerItem}>
			<img className={s.itemImg} src={Phone} alt='Phone' />
			<a href='tel:+380932226111' className={s.itemText}>
				+38 093 22 26 111
			</a>
		</div>
	)
}

export default ContPhone
