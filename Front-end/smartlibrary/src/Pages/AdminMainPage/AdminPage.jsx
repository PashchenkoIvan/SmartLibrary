import { Header } from '../../Components';
import Calendar from '../../Components/Calendar/Calendar';
import Panel from '../../Components/Panel/Panel';
import s from './AdminPage.module.css';

<<<<<<< HEAD
const AdminPage = props => {
	return (
		<div className={s.container}>
			<Calendar />
			<Panel tables={props.admin.tables} />
		</div>
	);
};
=======
const AdminPage = () => {
    return(
        <div className={s.container}>
            <Header/>
            <Calendar/>
            <Panel/>
        </div>
    );
}
>>>>>>> 31efdbd3e7f1193d837669c6fd06a2739110c151

export default AdminPage;
