import axios from 'axios';
import AuthService from '../services/AuthService';

export const BASE_URL = 'https://ualib-orion.herokuapp.com/api/v1';

const $api = axios.create({
	baseURL: BASE_URL,
});

$api.interceptors.request.use(config => {
	if (AuthService.AccessToken) {
		config.headers.authorization = `Bearer ${AuthService.AccessToken}`;
	}
	return config;
});

$api.interceptors.response.use(
	config => config,
	async error => {
		console.log(error);
		const originalRequest = error.config;
		if (
			error.response.status == 401 &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true;
			try {
				await axios
					.post(`${BASE_URL}/auth/token/refresh`, {
						refresh: `${localStorage.getItem('refresh')}`,
					})
					.then(res => {
						AuthService.AccessToken = res.data.access;
						localStorage.setItem('refresh', res.data.refresh);
					});
				return $api.request(originalRequest);
			} catch (e) {
				alert(e);
			}
		}
		throw error;
	}
);

export default $api;
