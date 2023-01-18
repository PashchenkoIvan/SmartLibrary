import s from './row.module.css';
import { Content, SideBar } from '.';

const Row = props => {
	console.log(props);
	return (
		<div className={s.row}>
			<Content book={props.book} />
			<SideBar
				title={props.book.book.title}
				category={props.book.book.category}
				books={props.books}
				status={props.status}
			/>
		</div>
	);
};

export default Row;
