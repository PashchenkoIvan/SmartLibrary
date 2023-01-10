import { Link } from 'react-router-dom';

import Table from '../../../../templates/Table/Table'


const ReportsToTheNewsTable = props => {
	let reportsToTheNewsElements = props.reportsToTheNews.map(r => {
		return (
			<div>
				<span>
					{r.threme}
				</span>
				<span>
					{r.place}
				</span>
				<span>
					{r.date}
				</span>
				<div>
					<Link 
						to={`/admin/reports-to-the-news/edit/${r.id}`}
						onClick={() => {window.scrollTo(0, 0)}}
					>
						<button style={{backgroundColor: `rgb(54, 187, 203)`}}>
							Редагувати
						</button>
					</Link>
					<button style={{backgroundColor: `rgb(248, 126, 115)`}}>
						Видалити
					</button>
				</div>
			</div>
		);
	});

	return (
		<Table>
			<div name='reports-to-the-news'>
				<div name='keys-bar'>
					<span>Мета {`(${props.reportsToTheNews.length})`}</span>
					<span>Місце</span>
					<span>Дата</span>
					<span></span>
				</div>
				<div name='table'>{reportsToTheNewsElements}</div>
			</div>
		</Table>
	);
};

export default ReportsToTheNewsTable;