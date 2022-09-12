import { AxiosResponse } from 'axios';

import { SERVER_BASE_URL } from '../utils/Constants';

import { request } from './api.helpers';
import { UserDataResponse } from './types';

const UserAPI = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  login: (username: string, password: string): Promise<AxiosResponse<UserDataResponse>> => {
    try {
      return request(`${SERVER_BASE_URL}/Authenticate/Login`, 'POST', { username, password });
    } catch (error) {
      console.error(error)
    }
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  logout: (): Promise<AxiosResponse> => {
    try {
      return request(`${SERVER_BASE_URL}/Authenticate/Logout`, 'GET');
    } catch (error) {
      console.error(error)
    }
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  register: (username: string, email:string, password: string): Promise<AxiosResponse<UserDataResponse>> => {
    try {
      return request(`${SERVER_BASE_URL}/Authenticate/Register`, 'POST', { username, email, password });
    } catch (error) {
      console.error(error)
    }
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  registerAdmin: (username: string, email:string, password: string): Promise<AxiosResponse<UserDataResponse>> => {
    try {
      return request(`${SERVER_BASE_URL}/Authenticate/RegisterAdmin`, 'POST', { username, email, password });
    } catch (error) {
      console.error(error)
    }
  },
};

export default UserAPI;
