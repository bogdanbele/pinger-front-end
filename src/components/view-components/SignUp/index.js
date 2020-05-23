import React from 'react';
import SignUpForm from '../../feature-components/authentication/SignUpForm';
import {IsLoggedInComponent} from '../../feature-components/authentication/helpers';

const SignUpView = () => {
	return (
		<div className='App'>
			<header className='App-header'>
				<IsLoggedInComponent>
					<SignUpForm/>
				</IsLoggedInComponent>
			</header>
		</div>
	);
};

export default SignUpView;
