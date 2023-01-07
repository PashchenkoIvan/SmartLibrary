import $api from '../http/init';

export default class UserService {
	static async GetUser(id) {
		return await $api.get(`/auth/${id}`);
	}
}
