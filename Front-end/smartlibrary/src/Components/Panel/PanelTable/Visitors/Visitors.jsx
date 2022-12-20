import { Link } from 'react-router-dom';

import s from './Visitors.module.css';
import tableData from './tableData';
import Table from '../../../Table/Table';

export let Array = [
	{
		name: 'Ivan Pashchenko',
		home: 'st.Darnitskaya 19',
		birthday: '28.04.2005',
		comment: 'none',
		book: 'BRAT 2',
		date: '03.12.2022',
	},
	{
		name: 'Kirill Bazavlutskiy',
		home: 'st.Tverskaya 2',
		birthday: '03.04.2005',
		comment: 'none',
		book: 'BRAT 2',
		date: '03.12.2022',
	},
	{
		name: 'Ivan Pashchenko',
		home: 'st.Darnitskaya 19',
		birthday: '28.04.2005',
		comment: 'none',
		book: 'BRAT 2',
		date: '03.12.2022',
	},
	{
		name: 'Kirill Bazavlutskiy',
		home: 'st.Tverskaya 2',
		birthday: '03.04.2005',
		comment: 'none',
		book: 'BRAT 2',
		date: '03.12.2022',
	},
	{
		name: 'Ivan Pashchenko',
		home: 'st.Darnitskaya 19',
		birthday: '28.04.2005',
		comment: 'none',
		book: 'BRAT 2',
		date: '03.12.2022',
	},
	{
		name: 'Kirill Bazavlutskiy',
		home: 'st.Tverskaya 2',
		birthday: '03.04.2005',
		comment: 'none',
		book: 'BRAT 2',
		date: '03.12.2022',
	},
	{
		name: 'Ivan Pashchenko',
		home: 'st.Darnitskaya 19',
		birthday: '28.04.2005',
		comment: 'none',
		book: 'BRAT 2',
		date: '03.12.2022',
	},
	{
		name: 'Kirill Bazavlutskiy',
		home: 'st.Tverskaya 2',
		birthday: '03.04.2005',
		comment: 'none',
		book: 'BRAT 2',
		date: '03.12.2022',
	},
	{
		name: 'Ivan Pashchenko',
		home: 'st.Darnitskaya 19',
		birthday: '28.04.2005',
		comment: 'none',
		book: 'BRAT 2',
		date: '03.12.2022',
	},
	{
		name: 'Kirill Bazavlutskiy',
		home: 'st.Tverskaya 2',
		birthday: '03.04.2005',
		comment: 'none',
		book: 'BRAT 2',
		date: '03.12.2022',
	},
	{
		name: 'Ivan Pashchenko',
		home: 'st.Darnitskaya 19',
		birthday: '28.04.2005',
		comment: 'none',
		book: 'BRAT 2',
		date: '03.12.2022',
	},
	{
		name: 'Kirill Bazavlutskiy',
		home: 'st.Tverskaya 2',
		birthday: '03.04.2005',
		comment: 'none',
		book: 'BRAT 2',
		date: '03.12.2022',
	},
	{
		name: 'Ivan Pashchenko',
		home: 'st.Darnitskaya 19',
		birthday: '28.04.2005',
		comment: 'none',
		book: 'BRAT 2',
		date: '03.12.2022',
	},
	{
		name: 'Kirill Bazavlutskiy',
		home: 'st.Tverskaya 2',
		birthday: '03.04.2005',
		comment: 'none',
		book: 'BRAT 2',
		date: '03.12.2022',
	},
	{
		name: 'Ivan Pashchenko',
		home: 'st.Darnitskaya 19',
		birthday: '28.04.2005',
		comment: 'none',
		book: 'BRAT 2',
		date: '03.12.2022',
	},
	{
		name: 'Kirill Bazavlutskiy',
		home: 'st.Tverskaya 2',
		birthday: '03.04.2005',
		comment: 'none',
		book: 'BRAT 2',
		date: '03.12.2022',
	},
	{
		name: 'Ivan Pashchenko',
		home: 'st.Darnitskaya 19',
		birthday: '28.04.2005',
		comment: 'none',
		book: 'BRAT 2',
		date: '03.12.2022',
	},
	{
		name: 'Kirill Bazavlutskiy',
		home: 'st.Tverskaya 2',
		birthday: '03.04.2005',
		comment: 'none',
		book: 'BRAT 2',
		date: '03.12.2022',
	},
	{
		name: 'Ivan Pashchenko',
		home: 'st.Darnitskaya 19',
		birthday: '28.04.2005',
		comment: 'none',
		book: 'BRAT 2',
		date: '03.12.2022',
	},
	{
		name: 'Kirill Bazavlutskiy',
		home: 'st.Tverskaya 2',
		birthday: '03.04.2005',
		comment: 'none',
		book: 'BRAT 2',
		date: '03.12.2022',
	},
	{
		name: 'Ivan Pashchenko',
		home: 'st.Darnitskaya 19',
		birthday: '28.04.2005',
		comment: 'none',
		book: 'BRAT 2',
		date: '03.12.2022',
	},
	{
		name: 'Kirill Bazavlutskiy',
		home: 'st.Tverskaya 2',
		birthday: '03.04.2005',
		comment: 'none',
		book: 'BRAT 2',
		date: '03.12.2022',
	},
	{
		name: 'Ivan Pashchenko',
		home: 'st.Darnitskaya 19',
		birthday: '28.04.2005',
		comment: 'none',
		book: 'BRAT 2',
		date: '03.12.2022',
	},
	{
		name: 'Kirill Bazavlutskiy',
		home: 'st.Tverskaya 2',
		birthday: '03.04.2005',
		comment: 'none',
		book: 'BRAT 2',
		date: '03.12.2022',
	},
];

const Block = props => {
	return (
		<div className={s.infoBlock}>
			<p>{props.name}</p>
			<p>{props.home}</p>
			<p>{props.birthday}</p>
			<p>{props.comment}</p>
			<p>{props.book}</p>
			<p>{props.date}</p>
			<button>Видалити</button>
		</div>
	);
};

export const Visitors = () => {
	let ArrayAdd = Array.map(e => (
		<Block
			name={e.name}
			home={e.home}
			birthday={e.birthday}
			comment={e.comment}
			book={e.book}
			date={e.date}
		/>
	));
	return (
		<div className={s.tableContainer}>
			<Table data={Array} keys={tableData()} />
		</div>
	);
};

export default Visitors;
