import Table from '../../../../templates/Table/Table'

const VisitorsTable = props => {
	let visitorsElements = props.visitors.map(v => {
		return (
			<div>
				<div>{v.name}</div>
                <div>{v.home}</div>
                <div>{v.birthday}</div>
                <div>{v.comment}</div>
                <div>{v.book}</div>
                <div>{v.date}</div>
                <div>
                    <button
                        onClick={() => {window.scrollTo(0, 0)}}
                        style={{backgroundColor: `rgb(248, 126, 115)`}}
                    >
                        Видалити
                    </button>
                </div>
			</div>
		);
	});

	return (
		<Table>
			<div name='visitors'>
				<div name='keys-bar'>
					<span>ПІБ {`(${props.visitors.length})`}</span>
					<span>Місце проживання</span>
					<span>Дата народження</span>
					<span>Коментар</span>
					<span>Книга</span>
					<span>Дата</span>
                    <span></span>
				</div>
				<div name='table'>{visitorsElements}</div>
			</div>
		</Table>
	);
};

export default VisitorsTable;