import React from 'react'
import s from './LogInBlock.module.css'
function LogInBlock() {
	return (
		<div className={s.LogInBlock}>
			<h2 className={s.inputTitle}>Email</h2>
			<input className={s.inputPole} type='email' />
			<h2 className={s.inputTitle}>Пароль</h2>
			<input className={s.inputPole} type='password' />
			<button className={s.logInBotton}>Увійти</button>
		</div>
	)
}

export default LogInBlock
