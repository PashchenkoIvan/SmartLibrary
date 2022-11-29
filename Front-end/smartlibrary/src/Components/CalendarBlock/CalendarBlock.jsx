import s from './CalendarBlock.module.css';
import Calendar from 'react-calendar';
import './CalendarStyle.css';

const CalendarBlock = () => {
    return(
        <div className={s.container}>
            <h1>Особистий кабінет</h1>
            <div className={s.calendarBlock}>
                <div className={s.calendar}>
                    <Calendar/>
                </div>
            </div>
        </div>
    );
}

export default CalendarBlock;