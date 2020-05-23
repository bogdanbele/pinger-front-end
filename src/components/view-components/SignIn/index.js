import React from 'react';
import SignInForm from '../../feature-components/authentication/SignInForm';
import {IsLoggedInComponent} from '../../feature-components/authentication/helpers';

const SignInView = () => {
	return (
		<div className='App'>
			<header className='App-header'>
				<IsLoggedInComponent>
					<SignInForm/>
				</IsLoggedInComponent>
			</header>
		</div>
	);
};

export default SignInView;
