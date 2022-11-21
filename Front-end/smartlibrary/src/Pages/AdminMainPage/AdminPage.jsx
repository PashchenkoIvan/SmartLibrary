import { Header } from '../../Components';
import Calendar from '../../Components/Calendar/Calendar';
import Panel from '../../Components/Panel/Panel';
import s from './AdminPage.module.css';

const AdminPage = props => {
	return (
		<div className={s.container}>
			<Calendar />
			<Panel tables={props.admin.tables} />
		</div>
	);
};

export default AdminPage;
