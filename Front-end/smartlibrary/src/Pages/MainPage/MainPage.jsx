import s from './MainPage.module.css';
import React from 'react'
import { PopularBooks } from '../../Components';
import Calendar from 'react-calendar';


const MainPage = props => {
  return (
    <div className={s.container}>
      <div className={s.zahodi}>
        <div className={s.infoBlock}>
          <p>З нами цікавіше</p>
          <h1>ЗАХОДИ БІБЛІОТЕКИ</h1>
        </div>
        <div className={s.bottomBlock}>
            <div className={s.calendarBlock}>
                <div className={s.calendar}>
                    <Calendar/>
                </div>
                <div className={s.newsBlock}></div>
            </div>
            <div className={s.editBlock}>
                <p>Андрюх Людмила</p>
                <div className={s.buttonBlock}>

                </div>
            </div>
            <div className={s.editBlock}>
                <p>Карпенко Тарас</p>
                <div className={s.buttonBlock}>
                  
                </div>
            </div>
        </div>
      </div>
      <PopularBooks data={props.data} />
    </div>
  )
}
export default MainPage;