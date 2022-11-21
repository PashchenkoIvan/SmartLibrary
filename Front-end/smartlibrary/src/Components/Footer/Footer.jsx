import s from './Footer.module.css';
import React from 'react'
import Clock from './image/clock.png';
import Phone from './image/phone.png';
import Point from './image/point.png';
import Logo from '../Header/images/logo.png';


const Footer = () => {
  return (
    <div className={s.container}>
        <div className={s.item}>
            <div className={s.image}>
                <img src={Clock} alt="Clock" />
            </div>
            <div className={s.text}>
                <p>Вт-Сб: 9:00 - 18:00</p>
                <p>Вс-Пн:Вихідний</p>
            </div>
        </div>
        <div className={s.item}>
            <div className={s.image}>
                <img src={Phone} alt="Phone" />
            </div>
            <div className={s.text}>
                <p>+38 093 22 26 111</p>
            </div>
        </div>
        <div className={s.item}>
            <div className={s.image}>
                <img src={Point} alt="Clock" />
            </div>
            <div className={s.text}>
                <p>c. Дослідне</p>
                <p>вул. Наукова 20</p>
            </div>
        </div>
        <div className={s.itemLast}>
            <img src={Logo} alt="Logo" />
            <div className={s.textLast}>
                <p>Розроблено   #SmartLibrary</p>
                <p>
                    Інформація та зображення на сайті взяті
                    з відкритих джерел.
                </p>
            </div>
        </div>
    </div>
  )
}
export default Footer;