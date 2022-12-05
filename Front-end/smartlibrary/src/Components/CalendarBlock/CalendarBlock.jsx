import s from './CalendarBlock.module.css';
import Calendar from 'react-calendar';
import './CalendarStyle.css';
import { useState } from 'react';

const CalendarBlock = () => {
    // const [news, setNews] = useState({
    //     date: '', 
    //     text: '',
    // });
    return(
        <div className={s.container}>
            <h1>Особистий кабінет</h1>
            <div className={s.calendarBlock}>
                <div className={s.calendar}>
                    <Calendar onClickDay={(value, event) => console.log('Date is ', value)}/>
                </div>
                {/* <div className={s.input}>
                    <input type="date" onChange={data => setNews({...news, date: data})}/>
                    <input type="text" onChange={text => setNews({...news, text: text})} placeholder='News'/>
                    <button onClick={console.log(news)}>Add</button>
                </div> */}
            </div>
        </div>
    );
}

export default CalendarBlock;