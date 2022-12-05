import React from 'react'
import { TransHeader, LogInBLock } from '../../containers'
import s from './LogIn.module.css'

function LogInB() {
	return (
		<div className={s.LogIn}>
			<TransHeader />
			<div className={s.logInContainer}>
				<h1 className={s.nameLogIn}>авторизація бібліотакаря</h1>
				<LogInBLock />
			</div>
		</div>
	)
}

export default LogInB
