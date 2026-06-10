import axios from 'axios'

import { env } from './env'

export const api = axios.create({
  baseURL: env.apiUrl,

  headers: {
    'Content-Type':
      'application/json',
  },

  timeout: 10000,
})

/* =========================
   REQUEST INTERCEPTOR
========================= */

api.interceptors.request.use(
  (config) => {
    // future auth token
    // config.headers.Authorization =
    //   `Bearer TOKEN`

    return config
  },

  (error) => {
    return Promise.reject(error)
  }
)

/* =========================
   RESPONSE INTERCEPTOR
========================= */

api.interceptors.response.use(
  (response) => {
    return response
  },

  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized')
    }

    if (error.response?.status === 500) {
      console.error('Server Error')
    }

    return Promise.reject(error)
  }
)