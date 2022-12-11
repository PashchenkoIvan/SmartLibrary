import s from './LibrariansTable.module.css';

const LibrariansTable = ({ librarians }) => {
	let librariansElements = librarians.map(l => {
		return (
			<div className={s.row}>
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
		<div className={s.container}>
			<div className={s.header}>
				<p>ПІБ ({librarians.length})</p>
				<p>Email</p>
				<p>Телефон</p>
				<p>Назва</p>
			</div>
			<div className={s.main}>{librariansElements}</div>
		</div>
	);
};

export default LibrariansTable;
