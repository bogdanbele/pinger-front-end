import React from 'react';
import SignUp from '../../feature-components/authentication/SignUp';
import { useQuery } from '@apollo/react-hooks';

// Client-side queries
import { IS_LOGGED_IN } from '../../../apollo/queries';

const IsLoggedIn = () => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  if (loading || !data) return <p>'Loading'</p>;
  if (error) return error;
  return data.isLoggedIn ? (
    <p>You are part of the gang. Grab a hat you dufus</p>
  ) : (
    <SignUp />
  );
};

const SignUpView = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <IsLoggedIn />
      </header>
    </div>
  );
};

export default SignUpView;
