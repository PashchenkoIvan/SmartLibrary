import { React, useEffect } from 'react'
import axios from 'axios';
import Popup from 'reactjs-popup';
import Calendar from 'react-calendar';

import Qr from '../image/qrcode.png';
import s from './Cabinet.module.css';
import sp from '../../../Components/Panel/PanelTable/Books/BooksTable/SingleBook/popUps.module.css';
import './CalendarStyle.css';

// import 'react-calendar/dist/Calendar.css';

const subFormTableRowAdd = (name, fieldName, isChecked = true) => {
    return (
        <div className={s.subFormTableRow}>
            <div className={s.subFormTableCell}>
                {name}
            </div>
            <div className={s.subFormTableCell}>
                <input type="radio" name={`${fieldName}`} checked />
            </div>
            <div className={s.subFormTableCell}>
                <input type="radio" name={`${fieldName}`} />
            </div>
        </div>
    )
}

const MySubcribesPopUp = () => {
    return(
        <div>
            <div className={s.subFormTable}>
                <div className={`${s.subFormTableRow} ${s.tableHeaderRow}`}>
                    <div className={s.subFormTableCell}>
                        Категорія
                    </div>
                    <div className={s.subFormTableCell}>
                        Особистий кабінет
                    </div>
                    <div className={s.subFormTableCell}>
                        E-mail та особистий кабінет
                    </div>
                </div>
                {subFormTableRowAdd("Новини", "news")}
                {subFormTableRowAdd("Повідомлення про наявність книги", "notification")}
            </div>
            <div className={s.formFullWCell}>
                Нові надходження
            </div>
            <div className={s.subFormTable}>
                {subFormTableRowAdd("Новини", "news")}
            </div>
        </div>
    )
}

const Cabinet = () => {
    useEffect(() => {
        axios.get(`https://ualib-orion.herokuapp.com/api/v1/library/categories`)
          .then(res => {
            const persons = res.data;
            console.log(res);
          });
    }, []);

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
                        <Popup
                            trigger={
                                <button>Мої підписки</button>
                            }
                            modal
                        >
                            {close => (
                                <>
                                    <div className={sp.header}>
                                    <span>Мої підписки</span>
                                    <button className={sp.closeBtn} onClick={close}>×</button>
                                    </div>
                                    <div className={sp.content}>
                                        <MySubcribesPopUp />
                                        <button className={sp.btn} onClick={() => {}}>Роздрукувати</button>
                                    </div>
                                </>
                            )}
                        </Popup>
                        
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