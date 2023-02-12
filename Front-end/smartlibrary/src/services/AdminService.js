import $api from '../http/init';

export default class AdminService {
	static async AddReader(reader) {
		return await $api.post('https://ualib-orion.herokuapp.com/api/v1/auth/', {
			...reader,
		});
	}
	static async GetReaders() {
		return await $api.get('https://ualib-orion.herokuapp.com/api/v1/auth/');
	}
	static async DeleteReader(reader) {
		return await $api.delete(
			`https://ualib-orion.herokuapp.com/api/v1/auth/${reader}`
		);
	}

	static async GetOrders() {
		return await $api.get('/orders/');
	}

	static async SetNews(NewsObj) {
		return await $api.post('https://ualib-orion.herokuapp.com/api/v1/events/', {
			...NewsObj,
		});
	}
	static async GetNews() {
		return await $api.get('https://ualib-orion.herokuapp.com/api/v1/events/');
	}
}
