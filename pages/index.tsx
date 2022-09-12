import React from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import Image from 'next/image';

import { RootState } from '../lib/redux/reducers';
import { getAuthToken } from '../lib/utils/helpers';
import logoWithText from '../lib/assets/images/logo-and-text-whitebg.png';
import ErrorMessage from '../components/Common/ErrorMessage';
import LoginForm from '../components/User/LoginForm';
import SplashScreen from '../components/Common/SplashScreen';

const Home = () => {
  const errorMessage = useSelector((state: RootState) => state.task.errorMessage)

  return (
    !getAuthToken() ? <>
      <Head>
        <title>Brightr - Login</title>
        <meta name="description" content="Please login to use." />
      </Head>
      <div className="auth-page">
        <div className='login-page'>
          <div className="column">
            <div className='login-logo-form-container'>
              <div className='login-logo-container'>
                <Image
                  src={logoWithText}
                  alt="Login logo"
                />
              </div>
              {
                errorMessage ? <div className='error-login-wrapper'>
                  <ErrorMessage hasIcon message={errorMessage}/>
                </div> : <div style={{ height: '100px' }}/>
              }
              <div className="login-form-container">
                <LoginForm/>
              </div>
            </div>
          </div>
          <div className="column">
            <div className='mr-5'>

            </div>
          </div>
        </div>
      </div>
    </> : <SplashScreen/>
  )
}

export default Home;
