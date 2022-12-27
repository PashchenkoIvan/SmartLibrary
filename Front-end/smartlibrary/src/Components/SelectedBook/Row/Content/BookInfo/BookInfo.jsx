import ContentLoader from 'react-content-loader';
import s from './bookInfo.module.css';

const BookInfo = props => {
	const isLoading = props.isLoading;

	const skeletonLoad = (
		<ContentLoader
			speed={2}
			viewBox='0 0 100 100'
			backgroundColor='#f3f3f3'
			foregroundColor='#ecebeb'
			{...props}
		>
			{/* h2 */}
			<rect x='0' y='5' rx='2' ry='2' width='70%' height='4' />
			{/* property: Автор */}
			<rect x='0' y='13.5' rx='1' ry='1' width='9%' height='2.5' />
			<rect x='0' y='17.75' rx='2' ry='2' width='40%' height='3' />
			{/* property: Мова */}
			<rect x='0' y='27.5' rx='1' ry='1' width='9%' height='2.5' />
			<rect x='0' y='31.75' rx='2' ry='2' width='19%' height='3' />
			{/* property: Кількість сторінок */}
			<rect x='0' y='41.5' rx='1' ry='1' width='26%' height='2.5' />
			<rect x='0' y='45.75' rx='2' ry='2' width='6%' height='3' />
			{/* property: Тип книги */}
			<rect x='0' y='55.5' rx='1' ry='1' width='14%' height='2.5' />
			<rect x='0' y='59.75' rx='2' ry='2' width='20%' height='3' />
			{/* property: ISBN */}
			<rect x='0' y='69.5' rx='1' ry='1' width='7%' height='2.5' />
			<rect x='0' y='73.75' rx='2' ry='2' width='29%' height='3' />
			{/* property: Дата видання */}
			<rect x='0' y='83.5' rx='1' ry='1' width='19%' height='2.5' />
			<rect x='0' y='87.75' rx='2' ry='2' width='8%' height='3' />
		</ContentLoader>
	);

	const bookData = (
		<>
			<h2 className={s.bookName}>{props.title}</h2>
			<ul className={s.listParams}>
				<li className={s.singleParam}>
					<span className={s.paramKey}>Автор</span>
					<span className={s.paramValue}>{props.author}</span>
				</li>
				<li className={s.singleParam}>
					<span className={s.paramKey}>Мова</span>
					<span className={s.paramValue}>{props.language}</span>
				</li>
				<li className={s.singleParam}>
					<span className={s.paramKey}>Кількість сторінок</span>
					<span className={s.paramValue}>{props.number_of_pages}</span>
				</li>
				<li className={s.singleParam}>
					<span className={s.paramKey}>Тип книги</span>
					<span className={s.paramValue}>{props.book_type}</span>
				</li>
				<li className={s.singleParam}>
					<span className={s.paramKey}>ISBN</span>
					<span className={s.paramValue}>{props.isbn}</span>
				</li>
				<li className={s.singleParam}>
					<span className={s.paramKey}>Дата видання</span>
					<span className={s.paramValue}>{props.pubication_year}</span>
				</li>
			</ul>
		</>
	);

	return (
		<div className={s.container}>
			{isLoading ? skeletonLoad : bookData}
			{/* <div className={s.absolute}>
        {bookData}
      </div> */}
		</div>
	);
};

export default BookInfo;
