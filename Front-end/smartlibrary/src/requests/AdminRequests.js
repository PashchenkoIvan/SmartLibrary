import axios from 'axios';

export default class AdminRequests {
	static async AddReader(reader) {
		return await axios.post('https://ualib-orion.herokuapp.com/api/v1/auth/', {
			...reader,
		});
	}
	static async GetReaders() {
		return await axios.get('https://ualib-orion.herokuapp.com/api/v1/auth/');
	}
	static async SetNews(NewsObj) {
		return await axios.post('https://ualib-orion.herokuapp.com/api/v1/events/', {...NewsObj});
	}
	static async GetNews() {
		return await axios.get('https://ualib-orion.herokuapp.com/api/v1/events/');
	}
}
