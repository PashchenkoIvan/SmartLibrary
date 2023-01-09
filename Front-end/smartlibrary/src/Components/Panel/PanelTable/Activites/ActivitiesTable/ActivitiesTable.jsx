import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';

import Table from '../../../../templates/Table/Table';
import ActivitiesForm from '../ActivitiesForm/ActivitiesForm';

import sp from '../../../../../assets/styles/popUp.module.css';


const ActivitiesTable = ({ activities }) => {
	let activitiesElements = activities.map(a => {
		return (
			<div>
				<div>{a.name}</div>
				<div>{a.category}</div>
				<div>{a.dateTime}</div>
				<div>
					<Popup trigger={<button style={{backgroundColor: `rgb(54, 187, 203)`}}>Редагувати</button>} modal>
						{close => (
							<>
								<div className={sp.header}>
									<span>{a.name}</span>
									<button className={sp.closeBtn} onClick={close}>
										×
									</button>
								</div>
								<div className={sp.content}>
									<ActivitiesForm activity={a} />
								</div>
							</>
						)}
					</Popup>
					<button style={{backgroundColor: `rgb(248, 126, 115)`}}>Видалити</button>
					<Link to={'/admin/event-reports/create/' + a.id}>
						<button style={{backgroundColor: `rgb(105, 195, 152)`}}>
							Створити звіт
						</button>
					</Link>
				</div>
			</div>
		);
	});
	return (
		<Table>
			<div name='activities'>
				<div name='keys-bar'>
					<span>Назва заходу ({activities.length})</span>
					<span>Категорія</span>
					<span>Дата та час проведення</span>
					<span></span>
				</div>
				<div name='table'>{activitiesElements}</div>
			</div>
		</Table>
	);
};

export default ActivitiesTable;
