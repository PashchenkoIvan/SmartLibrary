import { Link } from 'react-router-dom';
import { Form } from '../../../../../index';
import axios from 'axios';

import s from './bookCreate.module.css';
import mainlFieldsData from '../mainFieldsData';
import additionalFieldsData from '../additionalFieldsData';

const BookCreate = props => {
	props.setHeader(false);
	
	// const { currentBookId } = useParams();
	// const [books, setBooks] = useState(props.data.books);

	//   const formMap = books.map(b =>
	// 	b.id === currentBookId ?

	// 	  : ''
	//   );

	// handleSubmit = e => {
	// 	e.preventDefault();
	
	// 	const book = {
	// 	  title: "sdgsdg"
	// 	}

	// 	axios.post(`https://ualib-orion.herokuapp.com/api/v1/library/books?title=${book.title}`, { book })
	// 		.then(res => {
	// 			console.log(res);
	// 			console.log(res.data);
	// 		})
	// };

	return (
		<div className={s.container}>
			<Link to='/admin/books' className={s.btn}>
				До каталогу книжок
			</Link>
			<div className={s.contentBlock}>
				<h2 className={s.caption}>Додавання нової книги</h2>
				<div className={s.topBar}>
					<button className={s.addBook}>Додати по URL</button>
					<button className={s.addBook}>Пошук в Google</button>
					<button className={s.addBook}>Пошук по штриху</button>
					<input
						className={s.inputCodeField}
						type='text'
						placeholder='Введіть штрих код книги'
					/>
				</div>
				<Form main={mainlFieldsData({})} additional={additionalFieldsData({})} btns={[{title: "Додати книгу", type: "submit"}]} />
			</div>
		</div>
	);
};

export default BookCreate;
