import axios from 'axios';

export const API_URL = 'https://ualib-orion.herokuapp.com/api/';

const $api = axios.create({
	xhrFields: { withCredentials: true },
	baseURL: API_URL,
	headers: {
		'Access-Control-Allow-Origin': '*',
		Allow: 'GET, POST, HEAD, OPTIONS',
		'Access-Control-Allow-Headers': '*',
		'Content-Type': 'application/json',
		Vary: 'Accept',
	},
});

$api.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcxNzg5NzU5LCJpYXQiOjE2NzE3ODk0NTksImp0aSI6ImM1NzkwMTRkMmQ4ZDQxMDNhOWJhYzdkYjJkZjZmYTM2IiwidXNlcl9pZCI6MX0.tqoOSWrHv0S47E0Q51NqTEi8jwawWA-ZGIv1D_r3Isg`;
	return config;
});

// $api.interceptors.response.use(
// 	config => {
// 		return config;
// 	},
// 	async error => {
// 		const originalRequest = error.config;
// 		if (
// 			error.response.status == 401 &&
// 			error.config &&
// 			!error.config._isRetry
// 		) {
// 			originalRequest._isRetry = true;
// 			try {
// 				const response = await axios.get(`${API_URL}token/refresh`, {
// 					xhrFields: { withCredentials: true },
// 				});
// 				localStorage.setItem('token', response.data.access);
// 				return $api.request(originalRequest);
// 			} catch (e) {
// 				console.log('НЕ АВТОРИЗОВАН');
// 			}
// 		}
// 		throw error;
// 	}
// );

export default $api;
