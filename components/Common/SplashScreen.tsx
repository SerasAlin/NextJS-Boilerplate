import React from 'react';
import Image from 'next/image';

import logoWithText from '../../lib/assets/images/logo-and-text-whitebg.png';
import LoadingSpinner from '../../components/Common/LoadingSpinner';

const SplashScreen = () => {
  // TODO USE DIFFERENT LOGO
  return (
    <div className='loading-page'>
      <div className='animate-flicker'>
        <Image
          src={logoWithText}
          alt="Login logo"
        />
      </div>
      <div style={{ margin: '90px auto' }}>
        <LoadingSpinner/>
      </div>

    </div>
  )
}

export default SplashScreen