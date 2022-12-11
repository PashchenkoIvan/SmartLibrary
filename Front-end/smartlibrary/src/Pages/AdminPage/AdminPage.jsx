import Calendar from '../../Components/Calendar/Calendar';
import Panel from '../../Components/Panel/Panel';
import s from './AdminPage.module.css';

const AdminPage = props => {
	props.setHeader(false);
	return (
		<div className={s.container}>
			<Calendar />
			<Panel state={props.state} />
		</div>
	);
};

export default AdminPage;
