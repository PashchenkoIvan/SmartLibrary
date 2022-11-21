import { Header } from '../../Components';
import Calendar from '../../Components/Calendar/Calendar';
import Panel from '../../Components/Panel/Panel';
import s from './AdminPage.module.css';

const AdminPage = () => {
    return(
        <div className={s.container}>
            <Header/>
            <Calendar/>
            <Panel/>
        </div>
    );
}

export default AdminPage;