import axios from 'axios';

export default class AdminRequests {
	static async AddReader(reader) {
		return await axios.post('https://ualib-orion.herokuapp.com/api/v1/auth/', {
			...reader,
		});
	}
}
