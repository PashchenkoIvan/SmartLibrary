import $api from '../http/init';

export default class UserService {
	static async GetUser(id) {
		return await $api.get(`/auth/${id}`);
	}

	static async CreateOrder(book, user, delivery_date) {
		return await $api.post('/orders/', {
			"book": book,
			"user": user,
			"delivery_date": delivery_date
		})
	}
}
