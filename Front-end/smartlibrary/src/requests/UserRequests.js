import { Http } from '../services/http.init';

export default class UserRequests {
	static async GetUser(id) {
		return await new Http({ auth: true }).get(`/auth/${id}`);
	}
}
