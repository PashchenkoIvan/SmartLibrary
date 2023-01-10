import Table from '../../../../templates/Table/Table';

const AffiliatesTable = ({ affiliates }) => {
	let affiliatesElements = affiliates.map(a => {
		return (
			<div>
				<div>{a.name}</div>
				<div>{a.address}</div>
				<div>
					<a href={a.url}>{a.url}</a>
				</div>
			</div>
		);
	});

	return (
		<Table>
			<div name='affiliates'>
				<div name='keys-bar'>
					<span>Назва ({affiliates.length})</span>
					<span>Адреса</span>
					<span>URL</span>
				</div>
				<div name='table'>{affiliatesElements}</div>
			</div>
		</Table>
	);
};

export default AffiliatesTable;
