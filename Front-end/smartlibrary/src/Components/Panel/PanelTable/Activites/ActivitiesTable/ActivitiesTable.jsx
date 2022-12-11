import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import s from './ActivitiesTable.module.css';
import './changeEvent.css';
import ChangeEvent from '../ChangeEvent/ChangeEvent';

const ActivitiesTable = ({ activities }) => {
	let activitiesElements = activities.map(a => {
		return (
			<div className={s.row}>
				<div>{a.name}</div>
				<div>{a.category}</div>
				<div>{a.dateTime}</div>
				<div>
					<Popup trigger={<button>Редагувати</button>}>
						<ChangeEvent activity={a} />
					</Popup>
				</div>
				<div>
					<button>Видалити</button>
				</div>
				<Link to={'/admin/event-reports/create/' + a.id}>Створити звіт</Link>
			</div>
		);
	});
	return (
		<div className={s.container}>
			<div className={s.header}>
				<p>Назва заходу ({activities.length})</p>
				<p>Категорія</p>
				<p>Дата та час проведення</p>
			</div>
			<div className={s.main}>{activitiesElements}</div>
		</div>
	);
};

export default ActivitiesTable;
