import axios from 'axios';
import { SetMessage } from '../redux/actions/messageActions';
import { store } from '../redux/store';
import AuthService from '../services/AuthService';

export const BASE_URL = 'https://ualib-orion.herokuapp.com/api/v1';
// export const BASE_URL = 'http://127.0.0.1:8000';

const $api = axios.create({
	baseURL: BASE_URL,
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type, Authorization"
},
});

$api.interceptors.request.use((config) => {
	if (AuthService.AccessToken) {
		config.headers.authorization = `Bearer ${AuthService.AccessToken}`;
	}
	return config;
});

$api.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config;
		if (
			error.response?.status === 401 &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true;
			try {
				await axios
					.post(`${BASE_URL}/auth/token/refresh`, {
						refresh: `${localStorage.getItem('refresh')}`,
					})
					.then((res) => {
						AuthService.AccessToken = res.data.access;
						localStorage.setItem('refresh', res.data.refresh);
					});
				return $api.request(originalRequest);
			} catch (e) {
				store.dispatch(SetMessage('Помилка запиту на сервер', 'error'));
			}
		} else {
			store.dispatch(SetMessage('Помилка', 'error'));
		}
		throw error;
	}
);

export default $api;

