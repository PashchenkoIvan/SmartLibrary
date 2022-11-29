import s from './Alerts.module.css';
import React from 'react'

const Alerts = () => {
  return (
    <div className={s.container}>
        <div className={s.block}>
            <h1>ПОВІДОМЛЕННЯ</h1>
            <div className={s.alertBlock}>
                <p>Система</p>
                <p>Книга у іншого читача</p>
                <p>10:09</p>
                <p>22.10.2022</p>
            </div>
        </div>
    </div>
  )
}
export default Alerts;