import jwt_decode from 'jwt-decode';
import cookie from 'js-cookie';

export const getDecodedToken: any = () => {
  try {
    if (cookie.get('access_token')) {
      return jwt_decode(cookie.get('access_token') as string)
    }
  } catch {}
}

export const getRefreshToken = () => {
  try {
    return cookie.get('refresh_token');
  } catch {}
}

export const updateToken = (token: string) => {
  cookie.set('access_token', token)
}

export const removeAllCookies = () => {
  Object.keys(cookie.get()).forEach((cookieName) => {
    cookie.remove(cookieName);
  });
}