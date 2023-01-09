import Table from '../../../../templates/Table/Table';

const LibrariansTable = ({ librarians }) => {
	let librariansElements = librarians.map(l => {
		return (
			<div>
				<div>{l.name}</div>
				<div>
					<a href={'mailto:' + l.email}>{l.email}</a>
				</div>
				<div>
					<a href={'tel:' + l.phone}>{l.phone}</a>
				</div>
				<div>{l.title}</div>
			</div>
		);
	});

	return (
		<Table>
			<div name='librarians'>
				<div name='keys-bar'>
					<span>ПІБ ({librarians.length})</span>
					<span>Email</span>
					<span>Телефон</span>
					<span>Назва</span>
				</div>
				<div name='table'>{librariansElements}</div>
			</div>
		</Table>
	);
};

export default LibrariansTable;
