import $api from './config';

export default class AuthRequests {
	static Login = (email, password) => {
		return $api.post('/login', { email, password });
	};

	static Registration = (email, password) => {
		return $api.post('/registration', { email, password });
	};

	static Logout = () => {
		return $api.post('/logout');
	};
}
