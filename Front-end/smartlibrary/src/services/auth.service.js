import axios from 'axios'
// import { Navigate, redirect } from "react-router-dom";

import { setStatus } from '../index'
import { Http } from './http.init'

import { API_URL } from '../.env'

let BEARER = ''


export default class AuthService {
  status = 'anonym';
  /**
   ******************************
   * @API
   ******************************
  */

  static async makeLogin ({ email, password }) {
    try {
      const response = await axios.post(`${API_URL}token/`,
        { email, password })
      console.log(response);
      _setAuthData({
        accessToken: response.data.access,
      })
      return true;
    } catch (e) {
        console.log(e.response?.data?.message);
    }
  }

  static async makeLogout () {
    try {
      const response = await new Http({ auth: true }).post('auth/logout', {}, { xhrFields: { withCredentials: true } })
      _resetAuthData()
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  static async refreshTokens () {
    try {
      const response = await axios.post(`${API_URL}auth/refresh-tokens`, {

      }, {xhrFields: { withCredentials: true }})
      _setAuthData({
        accessToken: response.data.data.accessToken,
      })
    } catch (e) {
      console.log(e.response?.data?.message);
      _resetAuthData()
    }
  }

  static debounceRefreshTokens = this._debounce(() => {
    return this.refreshTokens()
  }, 100)

  /**
   ******************************
   * @METHODS
   ******************************
   */

  static hasRefreshToken () {
    return Boolean(localStorage.getItem('refreshToken'))
  }

  static setRefreshToken (status) {
    if (!['', 'true'].includes(status)) {
      throw new Error(`setRefreshToken: invalid value ${status}; Expect one of ['', 'true']`)
    }

    localStorage.setItem('refreshToken', status)
  }

  static getBearer () {
    return BEARER
  }

  static setBearer (accessToken) {
    BEARER = `Bearer ${accessToken}`
  }

  /**
   * https://stackoverflow.com/questions/35228052/debounce-function-implemented-with-promises
   * @param inner
   * @param ms
   * @returns {function(...[*]): Promise<unknown>}
   * @private
   */
  static _debounce (inner, ms = 0) {
    let timer = null
    let resolves = []

    return function () {
      clearTimeout(timer)
      timer = setTimeout(() => {
        const result = inner()
        resolves.forEach(r => r(result))
        resolves = []
      }, ms)

      return new Promise(resolve => resolves.push(resolve))
    }
  }
}

/**
 ******************************
 * @private_methods
 ******************************
 */

// function _parseTokenData (accessToken) {
//   let payload = ''
//   let tokenData = {}

//   try {
//     payload = accessToken.split('.')[1]
//     tokenData = JSON.parse(atob(payload))
//   } catch (error) {
//     throw new Error(error)
//   }

//   return tokenData
// }

function _resetAuthData () {
  // reset tokens
  AuthService.setRefreshToken('')
  AuthService.setBearer('')
}

function _setAuthData ({ accessToken } = {}) {
  AuthService.setRefreshToken('true')
  AuthService.setBearer(accessToken)
}