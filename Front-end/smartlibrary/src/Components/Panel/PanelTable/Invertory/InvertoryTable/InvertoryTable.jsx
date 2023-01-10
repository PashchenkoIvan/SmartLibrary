import { Link } from 'react-router-dom';

import Table from '../../../../templates/Table/Table';


const InvertoryTable = props => {
	let invertoryElements = props.invertory.map(i => {
		return (
			<div>
				<Link to={'/book-single/' + i.id}>{i.bookName}</Link>
				<div>{i.bookAuthor}</div>
				<div>{i.ISBN}</div>
				<div>
					<p>{i.isPopularBook ? 'Вже сканована' : 'Не сканована'}</p>
				</div>
				<div>
					<button style={{backgroundColor: `#f5a623`}}>
						Видалити
					</button>
				</div>
			</div>
		);
	});

	return (
		<Table>
			<div name='inventory'>
				<div name='keys-bar'>
					<span>Назва сканованої книги ({props.invertory.length})</span>
					<span>Автор</span>
					<span>Інвертарний номер</span>
					<span>Статус</span>
					<span></span>
				</div>
				<div name='table'>{invertoryElements}</div>
			</div>
		</Table>
	);
};

export default InvertoryTable;
