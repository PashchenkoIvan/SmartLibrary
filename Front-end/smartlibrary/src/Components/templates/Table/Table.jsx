import s from './table.module.css';

const Table = props => {
	return (
		<div className={s.container}>
			{props.children}
		</div>
	);
};

export default Table;
