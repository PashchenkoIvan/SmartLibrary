import { Link } from 'react-router-dom';

import Table from '../../../../templates/Table/Table';


const AnnualReportingTable = ({ annualReporting }) => {
	let annualReportingElements = annualReporting.map(a => {
		return (
			<div>
				<div>{a.name}</div>
				<div>
					<Link
						to={`/admin/annual-reports/create/${a.id}`}
					>
						<button style={{backgroundColor: `rgb(54, 187, 203)`}}>
							Генерувати
						</button>
					</Link>
					<button style={{backgroundColor: `rgb(54, 187, 203)`}}>
						Скачати
					</button>
				</div>
			</div>
		);
	});

	return (
		<Table>
			<div name='annual-reporting'>
				<div name='keys-bar'>
					<span>Назва ({annualReporting.length})</span>
					<span></span>
				</div>
				<div name='table'>{annualReportingElements}</div>
			</div>
		</Table>
	);
};

export default AnnualReportingTable;