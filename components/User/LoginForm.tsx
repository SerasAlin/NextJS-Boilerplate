import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import cookie from 'js-cookie';

import UserAPI from '../../lib/api/User';
import PasswordField from '../Basic/PasswordField';
import TextField from '../Basic/TextField';
import LoginButton from '../Basic/LoginButton';
import { setErrorMessage } from '../../lib/redux/actions';

const LoginForm = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const router  = useRouter()
  const dispatch = useDispatch()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [hasError, setHasError] = useState<boolean>(false)

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (username !== '' && password !== '' && !username.includes(' ') && !password.includes(' ')) {
      setLoading(true);

      try {
        const { data, status } = await UserAPI.login(username, password);

        if (status !== 200) {
          dispatch(setErrorMessage('Something went wrong. Please try again.'));
        }

        if (data) {
          cookie.set('access_token', data.token)
          cookie.set('refresh_token', data.refresh_token)
          setHasError(false)
          dispatch(setErrorMessage(''))
          // TODO PUSH TO WHERE WE NEED
        }
      } catch (error) {
        setHasError(true)
        dispatch(setErrorMessage('Something went wrong. Please try again.'))
      } finally {
        setLoading(false);
      }
    } else {
      setHasError(true)
      dispatch(setErrorMessage('Wrong username/password combination'))
    }
  };

  return (
    <>
      <div className='field-container'>
        <TextField id='login' type='login' isLoading={isLoading} value={username} hasError={hasError} onValueChange={value => { setUsername(value) }} label='Username'/>
      </div>
      <div className='field-container'>
        <PasswordField isLoading={isLoading} value={password} setHasError={setHasError} hasError={hasError} onValueChange={value => { setPassword(value) }} label='Password'/>
      </div>
      <div className='login-button-container'>
        <LoginButton onClick={handleSubmit} loading={isLoading}/>
      </div>
    </> 
  );
};

export default LoginForm;
