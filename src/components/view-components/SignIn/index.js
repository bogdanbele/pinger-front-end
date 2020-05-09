import React from 'react';
import SignIn from '../../feature-components/authentication/SignIn';
import {IsLoggedInComponent} from "../../feature-components/authentication/helpers";

const SignInView = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <IsLoggedInComponent>
          <SignIn/>
        </IsLoggedInComponent>
      </header>
    </div>
  );
};

export default SignInView;
