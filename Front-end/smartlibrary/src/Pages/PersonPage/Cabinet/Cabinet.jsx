import { useEffect, useContext, useState } from 'react'
import axios from 'axios';
import Popup from 'reactjs-popup';
import Calendar from 'react-calendar';
import CyrillicToTranslit from 'cyrillic-to-translit-js';
import { RequestsContext } from '../../../index';

import Qr from '../image/qrcode.png';
import s from './Cabinet.module.css';
import sp from '../../../Components/Popup/popUps.module.css';
import './CalendarStyle.css';
import GCalendar from '../../../Components/GlobalCalendar/GCalendar';

// import 'react-calendar/dist/Calendar.css';

const toTranslit = new CyrillicToTranslit();

const subFormTableRowAdd = (name, fieldName, isChecked = true) => {
    return (
        <div className={s.subFormTableRow}>
            <div className={s.subFormTableCell}>
                {name}
            </div>
            <div className={s.subFormTableCell}>
                <input type="radio" name={`${fieldName}`} />
            </div>
            <div className={s.subFormTableCell}>
                <input type="radio" name={`${fieldName}`} />
            </div>
        </div>
    )
}

const subFormCategoriesMap = (categories) => {
    return (
        categories.map(c => (subFormTableRowAdd(c.title, toTranslit.transform(c.title, "-").toLowerCase())))
    )
}

const MySubcribesPopUp = props => {
    const Requests = useContext(RequestsContext);
    const [categories, setCategories] = useState({
        // 5 макетных категорий
        categories: ['', '', '', '', ''],
        isLoading: true,
    });

    useEffect(() => {
		Requests.GetBooksCategories().then(res => {
			console.log(res.data);
			const categories = res.data;
			setCategories({categories: categories, isLoading: false})
		})
	}, [Requests]);

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
            <div className={`${s.formFullWCell} ${s.tableHeaderRow}`}>
                Нові надходження
            </div>
            <div className={s.subFormTable}>
                {subFormCategoriesMap(categories.categories)}
            </div>
        </div>
    )
}

const Cabinet = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`https://ualib-orion.herokuapp.com/api/v1/library/categories`)
            .then(res => {
                const categories = res.data;
                setCategories(categories)
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
                        <Popup
                            trigger={
                                <button>Редагувати пароль</button>
                            }
                            modal
                        >
                            {close => (
                                <>
                                    <div className={sp.header}>
                                    <span>Редагувати пароль</span>
                                    <button className={sp.closeBtn} onClick={close}>×</button>
                                    </div>
                                    <div className={sp.content}>
                                        <div className={s.formFields}>
                                            <div className={s.singleFormField}>
                                                <label className={s.formLabel}>Email</label>
                                                <input className={s.formInput} type="email" name="email" value="example@user.mail" required />
                                            </div>
                                            <div className={s.singleFormField}>
                                                <label className={s.formLabel}>Введіть код з листа</label>
                                                <input className={s.formInput} type="text" name="code" required />
                                            </div>
                                        </div>
                                        <button
                                            className={sp.btn}
                                            onClick={() => {
                                                let code = document.querySelector("input[name=\"code\"]")

                                                if (code.value !== "123") {
                                                    alert("Невірний код")
                                                } else { 
                                                    alert("Успіх")
                                                }
                                            }}
                                        >
                                            Далі
                                        </button>
                                    </div>
                                </>
                            )}
                        </Popup>
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
                                    <form className={sp.content}>
                                        <div className={sp.table}>
                                            <MySubcribesPopUp categories={categories} />
                                        </div>
                                        <input className={sp.btn} value="Зберегти зміни" type="submit" />
                                    </form>
                                </>
                            )}
                        </Popup>
                        
                        <button>Вийти з системи</button>
                    </div>
                </div>
                <GCalendar/>
            </div>
        </div>
    )
}
export default Cabinet;