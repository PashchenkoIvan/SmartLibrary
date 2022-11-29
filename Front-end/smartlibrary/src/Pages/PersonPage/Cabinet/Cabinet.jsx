import s from './Cabinet.module.css';
import React from 'react'
import Qr from '../image/qrcode.png';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import './CalendarStyle.css';

const Cabinet = () => {
  return (
    <div className={s.container}>
        <p className={s.cabinetTitle}>ОСОБИСТИЙ КАБІНЕТ</p>
        <div className={s.block}>
            <div className={s.qrBlock}>
                <p>Особисттий QR-код</p>
                <div className={s.qrCode}>
                    <img src={Qr} alt="Qr-code" />
                </div>
            </div>
            <div className={s.editBlock}>
                <p>Pashchenko Ivan</p>
                <div className={s.buttonBlock}>
                    <button>Редагувати пароль</button>
                    <button>Мої підписки</button>
                    <button>Вийти з системи</button>
                </div>
            </div>
            <div className={s.calendarBlock}>
                <div className={s.calendar}>
                    <Calendar/>
                </div>
                <div className={s.infoBlock}></div>
            </div>
        </div>
    </div>
  )
}
export default Cabinet;