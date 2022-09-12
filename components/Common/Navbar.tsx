import React from 'react';

import { getAuthToken } from '../../lib/utils/helpers';

import Maybe from './Maybe';

const Navbar = () => {
 
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <Maybe test={!!getAuthToken()}>
            test maybe component
        </Maybe>
      </div>
    </nav>
  );
};

export default Navbar;
