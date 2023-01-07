import $api from './config';
import { Http } from '../services/http.init';
export default class BookRequests {
	static async GetBooks() {
		return await new Http({ auth: false }).get('/library/books/');
	};

	static async AddBook(data) {
		return await new Http({ auth: true }).post('/library/books/', {...data});
	};

	static async EditBook(id, data) {
		console.log(id);
		console.log(data);
		return await new Http({ auth: true }).put(`/library/books/${id}/`, {...data});
	};

	static async GetBooksCategories() {
		return await new Http({ auth: false }).get('/library/categories/');
	};

	static category = () => {
		return $api.post('/library/categories/', {});
	};

	static GetBooksCategory = category => {
		return $api.get(`/library/categories?title=${category}/`);
	};

	static DeleteBooksCategory = category => {
		return $api.delete(`/library/categories?title=${category}/`);
	};

	static async ChangeBooksCategory(id, data) {
		return await new Http({ auth: false }).put(`/library/categories/${id}/`, {...data});
	};

	static AddBooksCategory = category => {
		return $api.post('/library/categories/', {...category});
	};

	static GetBoosByTitle = title => {
		return $api.get(`/library/books?title=${title}/`);
	};
}
