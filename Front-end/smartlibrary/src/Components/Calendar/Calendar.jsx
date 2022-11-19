import CalendarBlock from '../CalendarBlock/CalendarBlock';
import s from './Calendar.module.css';

const Calendar = () => {
    return(
        <div className={s.container}>
            <CalendarBlock/>
        </div>
    );
}

export default Calendar;