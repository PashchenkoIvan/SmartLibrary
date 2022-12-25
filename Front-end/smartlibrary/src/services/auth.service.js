import axios from 'axios';
// import { Navigate, redirect } from "react-router-dom";

import { AuthContext, status } from '../index';
import { Http } from './http.init';

import { API_URL } from '../.env';

let BEARER = '';
let EXP = 0;

export default class AuthService {
	status = 'anonym';
	/**
	 ******************************
	 * @API
	 ******************************
	 */

	static async makeLogin({ email, password }) {
		try {
			let isStaff = '';
			const response = await axios
				.post(`${API_URL}auth/token`, { email, password })
				.then(function (result) {
					_setAuthData({
						accessToken: result.data.access,
						refreshToken: result.data.refresh,
						exp: _parseTokenData(result.data.access).exp,
					});
					console.log(result);
					return result;
				})
				.then(
					result => (isStaff = _parseTokenData(result.data.access).is_staff)
				);
			return isStaff;
		} catch (e) {
			console.log(e.response?.data?.message);
		}
	}

	static async makeLogout() {
		try {
			const response = await new Http({ auth: true }).post(
				'auth/logout',
				{},
				{ xhrFields: { withCredentials: true } }
			);
			_resetAuthData();
		} catch (e) {
			console.log(e.response?.data?.message);
		}
	}

	static async refreshTokens() {
		try {
			const response = await axios.post(
				`${API_URL}auth/token/refresh`,
				{
					refresh: `${localStorage.getItem('refresh')}`,
				}
				// { xhrFields: { withCredentials: true } }
			);
			console.log(_parseTokenData(response.data.access).is_staff);
			AuthService.setBearer(response.data.access);
			return _parseTokenData(response.data.access).is_staff;
		} catch (e) {
			console.log(e.response?.data?.message);
		}
	}

	static debounceRefreshTokens = this._debounce(() => {
		return this.refreshTokens();
	}, 100);

	/**
	 ******************************
	 * @METHODS
	 ******************************
	 */

	static isAccessTokenExpired() {
		const accessTokenExpDate = this.getAccessTokenExp() - 10;
		const nowTime = Math.floor(new Date().getTime() / 1000);

		return accessTokenExpDate <= nowTime;
	}

	static hasRefreshToken() {
		return Boolean(localStorage.getItem('refreshToken'));
	}

	// static setRefreshToken(status) {
	// 	if (!['', 'true'].includes(status)) {
	// 		throw new Error(
	// 			`setRefreshToken: invalid value ${status}; Expect one of ['', 'true']`
	// 		);
	// 	}

	// 	localStorage.setItem('refreshToken', status);
	// }

	static setRefreshToken(token) {
		localStorage.setItem('refresh', token);
	}

	static getBearer() {
		return BEARER;
	}

	static setBearer(accessToken) {
		BEARER = `Bearer ${accessToken}`;
	}

	static getAccessTokenExp() {
		return EXP;
	}

	static setAccessTokenExp(exp) {
		EXP = exp;
	}

	/**
	 * https://stackoverflow.com/questions/35228052/debounce-function-implemented-with-promises
	 * @param inner
	 * @param ms
	 * @returns {function(...[*]): Promise<unknown>}
	 * @private
	 */
	static _debounce(inner, ms = 0) {
		let timer = null;
		let resolves = [];

		return function () {
			clearTimeout(timer);
			timer = setTimeout(() => {
				const result = inner();
				resolves.forEach(r => r(result));
				resolves = [];
			}, ms);

			return new Promise(resolve => resolves.push(resolve));
		};
	}
}

/**
 ******************************
 * @private_methods
 ******************************
 */

function _parseTokenData(accessToken) {
	let payload = '';
	let tokenData = {};

	try {
		payload = accessToken.split('.')[1];
		tokenData = JSON.parse(atob(payload));
	} catch (error) {
		throw new Error(error);
	}

	return tokenData;
}

function _resetAuthData() {
	// reset tokens
	AuthService.setRefreshToken('');
	AuthService.setBearer('');
}

function _setAuthData({ accessToken, refreshToken, exp } = {}) {
	// AuthService.setRefreshToken('true');
	AuthService.setRefreshToken(refreshToken);
	AuthService.setBearer(accessToken);
	AuthService.setAccessTokenExp(exp);
}
