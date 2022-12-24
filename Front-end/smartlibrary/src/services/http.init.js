/*
    HTTP request layer
    if auth is required return patched axios instance(with access token in headers)
    else return clear axios instance
*/

import axios from 'axios'

import AuthService from './auth.service'
import { API_URL } from '../.env'

export class Http {
  constructor (status) {
    this.isAuth = status && status.auth ? status.auth : false
    this.instance = axios.create({
      baseURL: API_URL
    })

    return this.init()
  }

  init () {
    if (this.isAuth) {
      this.instance.interceptors.request.use(request => {
        request.headers.authorization = AuthService.getBearer()
        // if refreshToken is exist >> go to API and get new access token
        // тут при каждом запросе будет приходить новая пара токенов,
        // надо добавить условие на проверку валидности access токена
        if (AuthService.hasRefreshToken()) {
          return AuthService.debounceRefreshTokens()
            .then(response => {
              AuthService.setBearer(response.data.accessToken)
              request.headers.authorization = AuthService.getBearer()
              return request
            }).catch(error => Promise.reject(error))
        } else {
          return request
        }
      }, error => {
        return Promise.reject(error)
      })
    }

    return this.instance
  }
}