import React from 'react';
import SignUp from '../../feature-components/authentication/SignUp';
import {IsLoggedInComponent} from '../../feature-components/authentication/helpers';

const SignUpView = () => {
	return (
		<div className='App'>
			<header className='App-header'>
				<IsLoggedInComponent>
					<SignUp />
				</IsLoggedInComponent>
			</header>
		</div>
	);
};

export default SignUpView;
