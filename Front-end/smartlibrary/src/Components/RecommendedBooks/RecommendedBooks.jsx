import { Caption } from '.';
import BookList from '../BookList/BookList';

import s from './recommendedBooks.module.css';

const RecommendedBooks = props => {
    // const popularBooksFilter = props.books.filter(b => b.isPopularBook === true)

    return (
        <div className={s.bookCatalog}>
            <div className={s.bookContainer}>
                <Caption />
                <BookList books={props.books} />
            </div>
        </div>
    )
}

export default RecommendedBooks;