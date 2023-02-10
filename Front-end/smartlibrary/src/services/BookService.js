import $api from '../http/init';

export default class BookService {
	static async GetBooks() {
		return await $api.get('/library/books/');
	}

	static async AddBook(data) {
		return await $api.post('/library/books/', { ...data });
	}

	static async EditBook(id, data) {
		return await $api.patch(`/library/books/${id}/`, {
			...data,
		});
	}

	static async GetBooksCategories() {
		return await $api.get('/library/categories/');
	}

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
		return await $api.put(`/library/categories/${id}/`, {
			...data,
		});
	}

	static AddBooksCategory = category => {
		return $api.post('/library/categories/', { ...category });
	};

	static GetBoosByTitle = title => {
		return $api.get(`/library/books?title=${title}/`);
	};
}
