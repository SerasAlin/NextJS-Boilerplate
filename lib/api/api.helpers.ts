import axios, { Method } from 'axios';
import Router from 'next/router'

import { getRefreshToken, removeAllCookies, updateToken } from '../utils/Token';
import { SERVER_BASE_URL } from '../utils/Constants';
import { getAuthToken } from '../utils/helpers';


export const request = async (url: string, method: Method, payload?: any, requestHeaders?: { [key: string]: string }) => {

  const instance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      ...requestHeaders,
    },
  });

  instance.interceptors.request.use(
    (config) => {
      const token = getAuthToken();

      if (token) {
        if (config.headers)
          config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;

      if (err.response.data.message === 'No valid refresh token found!') {
        removeAllCookies()
        Router.push('/')
      }

      if (err.response && err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await instance.post(`${SERVER_BASE_URL}/Authenticate/Token`, {
            refresh_token: getRefreshToken(),
          });
          const { access_token } = rs.data;
          updateToken(access_token);
          instance.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
          return instance(originalConfig)
        } catch (error) {
          removeAllCookies()
          Router.push('/')
        }
      }
      return Promise.reject(err);
    }
  );

  return instance.request({
    url,
    method,
    data: payload,
  })
};
