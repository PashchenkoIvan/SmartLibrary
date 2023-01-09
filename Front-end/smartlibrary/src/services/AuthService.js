import axios from 'axios';
import $api from '../http/init';
import { BASE_URL } from '../http/init';

export default class AuthService {
	static AccessToken = '';

	static async Login({ email, password }) {
		return await $api.post('/auth/token', { email, password }).then(res => {
			this.AccessToken = res.data.access;
			localStorage.setItem('refresh', res.data.refresh);
			return JSON.parse(atob(res.data.access.split('.')[1])).is_staff;
		});
	}

	static async Refresh() {
		return await axios
			.post(`${BASE_URL}/auth/token/refresh`, {
				refresh: `${localStorage.getItem('refresh')}`,
			})
			.then(res => {
				this.AccessToken = res.data.access;
				localStorage.setItem('refresh', res.data.refresh);
				return JSON.parse(atob(res.data.access.split('.')[1])).is_staff;
			});
	}

	static Logout() {
		this.AccessToken = '';
		localStorage.setItem('refresh', '');
	}
}
