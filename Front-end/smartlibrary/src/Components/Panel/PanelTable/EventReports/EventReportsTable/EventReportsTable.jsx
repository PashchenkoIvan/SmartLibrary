import { Link } from 'react-router-dom';

import Table from '../../../../templates/Table/Table';


const EventReportsTable = ({ eventReporting }) => {
	let eventReportsElements = eventReporting.map(e => {
		return (
			<div>
				<div>{e.name}</div>
				<div>{e.date}</div>
				<Link
					to={`/admin/event-reports/edit/${e.id}`}
				>
					<button style={{backgroundColor: `rgb(54, 187, 203)`}}>
						Подивитися
					</button>
				</Link>
			</div>
		);
	});

	return (
		<Table>
			<div name='event-reports'>
				<div name='keys-bar'>
					<span>Назва звіту ({eventReporting.length})</span>
					<span>Дата створення</span>
					<span></span>
				</div>
				<div name='table'>{eventReportsElements}</div>
			</div>
		</Table>
	);
};

export default EventReportsTable;
