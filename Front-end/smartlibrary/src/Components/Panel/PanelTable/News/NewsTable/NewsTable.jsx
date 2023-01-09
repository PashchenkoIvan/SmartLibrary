import { Link } from 'react-router-dom';

import Table from '../../../../templates/Table/Table'


const NewsTable = props => {
	let newsElements = props.news.map(n => {
		return (
			<div>
				<span>
					{n.name}
				</span>
				<span>
					{n.description}
				</span>
				<span>
					{n.date}
				</span>
				<div>
					<Link 
						to={`/admin/news/edit/${n.id}`}
						onClick={() => {window.scrollTo(0, 0)}}
					>
						<button style={{backgroundColor: `rgb(54, 187, 203)`}}>
							Редагувати
						</button>
					</Link>
					<Link 
						to={`/admin/news/publish/${n.id}`}
						onClick={() => {window.scrollTo(0, 0)}}
					>
						<button style={{backgroundColor: `rgb(54, 187, 203)`}}>
							Публікувати
						</button>
					</Link>
				</div>
			</div>
		);
	});

	return (
		<Table>
			<div name='news'>
				<div name='keys-bar'>
					<span>Новина {`(${props.news.length})`}</span>
					<span>Опис</span>
					<span>Дата</span>
					<span></span>
				</div>
				<div name='table'>{newsElements}</div>
			</div>
		</Table>
	);
};

export default NewsTable;