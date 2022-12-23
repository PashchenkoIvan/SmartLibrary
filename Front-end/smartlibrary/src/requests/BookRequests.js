import $api from './config';

export default class BookRequests {
	static GetBooks = () => {
		return $api.get('/v1/library/books/');
	};

	static AddBook = data => {
		return $api.post('/v1/library/books/', {...data});
	};

	static GetBooksCategories = () => {
		return $api.get('/v1/library/categories/');
	};

	static category = () => {
		return $api.post('/v1/library/categories/', {});
	};

	static GetBooksCategory = category => {
		return $api.get(`/v1/library/categories?title=${category}/`);
	};

	static DeleteBooksCategory = category => {
		return $api.delete(`/v1/library/categories?title=${category}/`);
	};

	static ChangeBooksCategory = (title, data) => {
		return $api.post(`/v1/library/categories?title=${title}/`, {...data});
	};

	static AddBooksCategory = category => {
		return $api.post('/v1/library/categories/', {...category});
	};

	static GetBoosByTitle = title => {
		return $api.get(`/v1/library/books?title=${title}/`);
	};
}
