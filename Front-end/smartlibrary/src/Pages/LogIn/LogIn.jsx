import React from 'react'
import s from './LogIn.module.css'
import { TransHeader, LogInBLock } from '../../containers'
function LogIn() {
	return (
		<div className={s.LogIn}>
			<TransHeader />
			<div className={s.logInContainer}>
				<h1 className={s.nameLogIn}>авторизація користувача</h1>
				<LogInBLock />
			</div>
		</div>
	)
}

export default LogIn
