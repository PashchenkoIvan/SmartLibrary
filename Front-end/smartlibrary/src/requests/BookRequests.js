import $api from './config';

export default class BookRequests {
	static GetBooks = () => {
		return $api.get('/v1/library/books');
	};

	static GetBooksCategories = () => {
		return $api.get('/v1/library/categories');
	};

	static GetBooksCategory = category => {
		return $api.get(`/v1/library/categories?title=${category}`);
	};

	static GetBoosByTitle = title => {
		return $api.get(`/v1/library/books?title=${title}`);
	};
}
